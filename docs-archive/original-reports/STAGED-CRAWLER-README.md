# 🚀 Cloudflare 分階段文檔爬蟲

## 🎯 項目概述

這是一個專為 Cloudflare 官方文檔設計的分階段爬蟲系統，支援手動控制爬取進度，有效避免 IP 封鎖風險。

## ✨ 核心特色

- 🎯 **分階段控制**: 按產品線手動執行，完全掌控進度
- 🛡️ **風險最小**: 分散請求負載，降低封鎖風險
- 📊 **進度追蹤**: 實時監控和階段性統計
- 📁 **結構清晰**: 階層化輸出，便於 RAG 系統使用
- 🔄 **斷點續傳**: 支援中斷後恢復
- 📋 **詳細日誌**: 完整的執行記錄

## 🏗️ 產品線規劃

### 階段 1: 🏗️ Developer Products
- **產品**: Workers, Pages, R2, Images, Stream
- **預估**: 300-500 頁面, 15-30 分鐘
- **狀態**: ✅ 就緒

### 階段 2: 🤖 AI Products  
- **產品**: Workers AI, Vectorize, AI Gateway, AI Playground
- **預估**: 200-300 頁面, 10-20 分鐘
- **狀態**: ⏳ 等待階段 1 完成

### 階段 3: 🔐 Zero Trust
- **產品**: Access, Tunnel, Gateway, Browser Isolation
- **預估**: 400-600 頁面, 20-35 分鐘
- **狀態**: ⏳ 等待前序階段完成

### 階段 4: 🛡️ Security Products
- **產品**: DDoS Protection, Bot Management, SSL/TLS, Page Shield
- **預估**: 500-700 頁面, 25-40 分鐘
- **狀態**: ⏳ 等待前序階段完成

## 🔧 使用方法

### 快速開始
```bash
# 查看所有可用產品線
./run-staged-crawler.sh list

# 開始第一階段 (開發者產品線)
./run-staged-crawler.sh developer-products

# 監控模式執行
./run-staged-crawler.sh monitor developer-products
```

### 建議執行順序
```bash
# Day 1: 開發者產品線
./run-staged-crawler.sh developer-products

# Day 2: AI 產品線 (驗證第一階段後)
./run-staged-crawler.sh ai-products

# Day 3: Zero Trust 產品線
./run-staged-crawler.sh zero-trust

# Day 4: 安全產品線
./run-staged-crawler.sh security-products
```

### 進階使用
```bash
# 使用原始命令
node cloudflare-staged-crawler.js --product developer-products

# 查看幫助
node cloudflare-staged-crawler.js --help

# 驗證結果
node cloudflare-staged-crawler.js --product developer-products --validate
```

## 📁 輸出結構

```
cloudflare-docs/
├── 📊-progress.json                    # 總體進度追蹤
└── stages/                             # 分階段輸出
    ├── stage-1-developer-products/     # 第一階段：開發者產品線
    │   ├── README.md                   # 本階段總覽
    │   ├── workers.md                  # Workers 完整文檔
    │   ├── pages.md                    # Pages 完整文檔
    │   ├── r2.md                      # R2 文檔
    │   ├── images.md                  # Images 文檔
    │   └── stream.md                  # Stream 文檔
    ├── stage-2-ai-products/           # 第二階段：AI產品線
    ├── stage-3-zero-trust/            # 第三階段：Zero Trust
    └── stage-4-security-products/     # 第四階段：安全產品
```

## 📊 每階段輸出格式

每個階段都會生成：
- **README.md**: 階段總覽和統計
- **產品文檔**: 每個產品的完整 markdown 文件
- **進度記錄**: 更新到總體進度文件

每個產品文檔包含：
- 📑 自動生成的目錄
- 🔗 原始來源連結
- 📝 結構化的 markdown 內容
- ⏰ 生成時間戳記

## 🛡️ 安全機制

### IP 保護策略
- **請求延遲**: 每次請求間隔 1.5 秒
- **分階段執行**: 單次最多 500 頁面
- **錯誤重試**: 最多重試 3 次
- **用戶代理**: 模擬真實瀏覽器

### 錯誤處理
- **自動重試**: 網路錯誤自動重試
- **部分失敗**: 部分頁面失敗不影響整體
- **詳細日誌**: 完整的錯誤記錄
- **恢復機制**: 支援中斷後恢復

## 📈 監控和統計

### 實時監控
```bash
./run-staged-crawler.sh monitor developer-products
```

### 查看進度
```bash
# 檢查進度文件
cat cloudflare-docs/📊-progress.json

# 查看階段結果
ls -la cloudflare-docs/stages/

# 查看具體文件
ls -la cloudflare-docs/stages/stage-1-developer-products/
```

### 統計信息
每次執行後會顯示：
- ✅ 成功處理的頁面數
- ❌ 錯誤和跳過的頁面
- ⏰ 執行時間
- 📁 生成的文件數量

## 🔄 適用於 RAG 系統

生成的文檔具有以下特點：
- **結構化格式**: 統一的 markdown 結構
- **語義完整**: 保留完整上下文
- **來源追蹤**: 每個內容都有原始連結
- **分類清晰**: 按產品線和功能組織
- **檢索友好**: 適合向量化和語義搜索

## ⚠️ 注意事項

1. **網路穩定**: 需要穩定的網路連接
2. **耐心等待**: 每階段需要 10-40 分鐘不等  
3. **階段間隔**: 建議各階段間隔 15-30 分鐘
4. **驗證資料**: 每階段完成後建議檢查資料品質
5. **合規使用**: 僅用於學習和個人 RAG 系統

## 🆘 故障排除

### 常見問題
```bash
# 檢查程序語法
node -c cloudflare-staged-crawler.js

# 重新安裝依賴
npm install axios cheerio

# 清理並重新開始
rm -rf cloudflare-docs/
./run-staged-crawler.sh developer-products
```

### 如果中斷
```bash
# 恢復執行（功能開發中）
node cloudflare-staged-crawler.js --product developer-products --resume
```

---

## 🚀 立即開始

```bash
# 1. 查看可用產品線
./run-staged-crawler.sh list

# 2. 開始第一階段
./run-staged-crawler.sh developer-products
```

🎯 **Ready to Go!** 您的分階段爬蟲系統已完全就緒！
