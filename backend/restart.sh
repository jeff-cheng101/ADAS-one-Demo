#!/bin/bash

# =================================================================
# DDoS Attack Graph Analysis - 服務重啟腳本
# Project: ddos-attack-graph-demo
# Author: AI Assistant
# Date: $(date +"%Y-%m-%d")
# =================================================================

# 配置參數
PROJECT_NAME="DDoS攻擊圖表分析系統"
BACKEND_SERVICE="node index.js"
BACKEND_PORT="8080"
LOG_FILE="startup.log"
HEALTH_CHECK_URL="http://localhost:$BACKEND_PORT"

# 顏色輸出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 輸出函數
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 檢查端口是否被占用
check_port() {
    local port=$1
    if lsof -i :$port > /dev/null 2>&1; then
        return 0  # 端口被占用
    else
        return 1  # 端口空閒
    fi
}

# 服務健檢
health_check() {
    local max_attempts=10
    local attempt=1
    
    log_info "正在檢查服務健康狀態..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s $HEALTH_CHECK_URL > /dev/null 2>&1; then
            log_success "服務健康檢查通過！(嘗試 $attempt/$max_attempts)"
            return 0
        fi
        
        log_warning "健康檢查失敗，等待重試... ($attempt/$max_attempts)"
        sleep 2
        attempt=$((attempt + 1))
    done
    
    log_error "服務健康檢查失敗，請檢查日誌"
    return 1
}

# 停止後端服務
stop_backend() {
    log_info "停止後端服務..."
    
    if pgrep -f "$BACKEND_SERVICE" > /dev/null; then
        pkill -f "$BACKEND_SERVICE"
        sleep 3
        
        # 如果還在運行，強制停止
        if pgrep -f "$BACKEND_SERVICE" > /dev/null; then
            log_warning "進程仍在運行，強制停止..."
            pkill -KILL -f "$BACKEND_SERVICE"
            sleep 2
        fi
        
        log_success "後端服務已停止"
    else
        log_info "後端服務未運行"
    fi
}

# 啟動後端服務
start_backend() {
    log_info "啟動後端服務..."
    
    # 清理舊日誌
    > "$LOG_FILE"
    
    # 啟動服務
    node index.js > "$LOG_FILE" 2>&1 &
    
    # 等待啟動
    sleep 3
    
    # 檢查進程
    NEW_PID=$(pgrep -f "$BACKEND_SERVICE")
    
    if [ ! -z "$NEW_PID" ]; then
        log_success "後端服務啟動成功！PID: $NEW_PID"
        return 0
    else
        log_error "後端服務啟動失敗"
        return 1
    fi
}

# 顯示服務狀態
show_status() {
    echo ""
    log_info "=== 服務狀態檢查 ==="
    
    # 後端狀態
    if pgrep -f "$BACKEND_SERVICE" > /dev/null; then
        BACKEND_PID=$(pgrep -f "$BACKEND_SERVICE")
        log_success "後端服務：運行中 (PID: $BACKEND_PID, 端口: $BACKEND_PORT)"
    else
        log_error "後端服務：未運行"
    fi
    
    # ELK連接狀態
    if grep -q "✅ ELK" "$LOG_FILE" 2>/dev/null; then
        log_success "ELK連接：正常"
    else
        log_warning "ELK連接：可能異常，請檢查日誌"
    fi
    
    echo ""
    log_info "=== 快速操作 ==="
    echo "📋 查看後端日誌: tail -f $LOG_FILE"
    echo "🌐 後端地址: http://localhost:$BACKEND_PORT"
    echo ""
}

# 主程序
main() {
    echo "=================================================="
    echo "🚀 $PROJECT_NAME - 服務重啟腳本"
    echo "=================================================="
    
    # 解析參數
    case "${1:-backend}" in
        "backend"|"")
            log_info "重啟後端服務..."
            stop_backend
            start_backend
            
            if [ $? -eq 0 ]; then
                health_check
                show_status
            else
                log_error "後端服務重啟失敗，請檢查日誌"
                exit 1
            fi
            ;;
            
        "status")
            show_status
            ;;
            
        "stop")
            log_info "停止後端服務..."
            stop_backend
            ;;
            
        "help"|"-h"|"--help")
            echo "使用方法："
            echo "  ./restart.sh [選項]"
            echo ""
            echo "選項："
            echo "  backend, (空)  - 重啟後端服務 (默認)"
            echo "  status         - 顯示服務狀態"
            echo "  stop           - 停止後端服務"
            echo "  help           - 顯示此幫助信息"
            echo ""
            echo "範例："
            echo "  ./restart.sh           # 重啟後端"
            echo "  ./restart.sh status    # 查看狀態"
            ;;
            
        *)
            log_error "未知參數: $1"
            echo "使用 './restart.sh help' 查看幫助"
            exit 1
            ;;
    esac
}

# 執行主程序
main "$@"