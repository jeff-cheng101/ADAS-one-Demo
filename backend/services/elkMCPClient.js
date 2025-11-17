// ELK MCP 客戶端服務
// 處理與 Elasticsearch MCP Server 的通信

const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { spawn } = require('child_process');
const { ELK_CONFIG } = require('../config/elkConfig');
const { CLOUDFLARE_FIELD_MAPPING } = require('../../cloudflare-field-mapping');

// 使用全域 fetch (Node.js 18+ 內建)
const fetch = globalThis.fetch;

class ElkMCPClient {
  constructor() {
    this.client = null;
    this.connected = false;
    this.retryCount = 0;
    this.sessionId = null;
    this.serverCapabilities = {};
  }

  // 建立 HTTP 傳輸
  async createHttpTransport() {
    // 先測試 MCP Server 是否可用
    await this.testHttpConnection();
    
    // 建立 MCP 會話
    await this.createHttpSession();
    
    console.log('HTTP MCP 傳輸已準備就緒');
    return null; // 使用自定義的 HTTP 調用邏輯
  }

  // 建立 HTTP MCP 會話
  async createHttpSession() {
    try {
      // HTTP 模式的 MCP Server 可能不需要 initialize 會話
      // 嘗試直接調用工具列表來驗證連接
      const mcpUrl = `${ELK_CONFIG.mcp.serverUrl}/mcp`;
      console.log('驗證 MCP Server 連接...');
      
      // 嘗試獲取工具列表來驗證連接（不建立正式會話）
      try {
        const response = await fetch(mcpUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/event-stream'
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/list',
            id: 1
          })
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log('✅ MCP Server 連接驗證成功');
          this.sessionId = 'http-session';
          this.serverCapabilities = result.result?.capabilities || {};
          return true;
        } else {
          // 其他錯誤，跳過會話建立，直接使用工具調用
          console.log(`⚠️ 會話建立返回 ${response.status}，跳過會話建立`);
          this.sessionId = 'http-session';
          return true;
        }
      } catch (testError) {
        // 測試失敗，但繼續（可能服務器不需要會話）
        console.log('⚠️ 會話測試失敗，但繼續使用 HTTP 模式:', testError.message);
        this.sessionId = 'http-session';
        return true;
      }
    } catch (error) {
      console.error('❌ MCP 會話建立失敗:', error.message);
      // 即使失敗也繼續，因為 HTTP 模式可能不需要會話
      this.sessionId = 'http-session';
      return true;
    }
  }

  // 測試 HTTP 連接
  async testHttpConnection() {
    try {
      const pingUrl = `${ELK_CONFIG.mcp.serverUrl}/ping`;
      console.log(`測試 MCP Server 連接: ${pingUrl}`);
      
      const response = await fetch(pingUrl, {
        method: 'GET',
        timeout: 5000
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      console.log('✅ MCP Server HTTP 連接測試成功');
      return true;
    } catch (error) {
      console.error('❌ MCP Server HTTP 連接測試失敗:', error.message);
      throw new Error(`無法連接到 MCP Server: ${error.message}`);
    }
  }

  // 直接 HTTP 工具調用
  async callHttpTool(toolName, args = {}) {
    try {
      const mcpUrl = `${ELK_CONFIG.mcp.serverUrl}/mcp`;
      console.log(`調用 MCP 工具: ${toolName}`);
      
      // 使用 MCP JSON-RPC 格式
      const requestId = Date.now();
      
      // 設置正確的 Accept 頭（服務器要求同時接受 application/json 和 text/event-stream）
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream'
      };
      
      // 使用配置中的超時時間，預設為 4 分鐘（240000ms）以適應大數據量查詢
      const timeout = ELK_CONFIG.mcp.timeout || 240000;
      console.log(`⏱️  請求超時設置: ${timeout / 1000} 秒`);
      
      // 構建 MCP JSON-RPC 請求體（確保格式正確）
      const requestBody = {
        jsonrpc: '2.0',
        method: 'tools/call',
        id: requestId,
        params: {
          name: toolName,
          arguments: args
        }
      };
      
      // 調試：輸出實際發送的請求體
      console.log('📤 發送 MCP 請求體:', JSON.stringify(requestBody, null, 2));
      
      const response = await fetch(mcpUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(timeout)
      });
      
      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`HTTP ${response.status}: ${response.statusText}${errorText ? ` - ${errorText.substring(0, 200)}` : ''}`);
      }
      
      // 檢查回應類型：可能是 JSON 或 SSE (text/event-stream)
      const contentType = response.headers.get('content-type') || '';
      let result;
      
      if (contentType.includes('text/event-stream')) {
        // 處理 SSE 格式回應
        console.log('📥 收到 SSE 格式回應，正在解析...');
        const text = await response.text();
        console.log('📥 SSE 回應原始內容 (前 500 字元):', text.substring(0, 500));
        
        // SSE 格式：每行以 "data: " 開頭，後面是 JSON
        // 提取所有 "data: " 後面的 JSON 內容
        const lines = text.split('\n');
        let jsonData = null;
        
        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('data: ')) {
            try {
              const jsonStr = trimmedLine.substring(6); // 移除 "data: " 前綴
              jsonData = JSON.parse(jsonStr);
              console.log('✅ 成功解析 SSE 中的 JSON 數據');
              break; // 找到第一個有效的 JSON 就停止
            } catch (e) {
              console.warn('⚠️  解析 SSE 行失敗:', trimmedLine.substring(0, 100));
            }
          } else if (trimmedLine.startsWith('{') && !jsonData) {
            // 有些 SSE 回應可能直接是 JSON，沒有 "data: " 前綴
            try {
              jsonData = JSON.parse(trimmedLine);
              console.log('✅ 成功解析 SSE 中的直接 JSON 數據');
              break;
            } catch (e) {
              // 繼續嘗試下一行
            }
          }
        }
        
        if (!jsonData) {
          // 如果沒有找到 "data: " 格式，嘗試直接解析整個回應
          try {
            jsonData = JSON.parse(text);
            console.log('✅ 成功直接解析回應為 JSON');
          } catch (e) {
            throw new Error(`無法解析 SSE 回應: ${e.message}。回應內容: ${text.substring(0, 200)}`);
          }
        }
        
        result = jsonData;
      } else {
        // 標準 JSON 回應
        result = await response.json();
      }
      
      if (result.error) {
        throw new Error(`MCP Error: ${result.error.message}`);
      }
      
      return result.result;
    } catch (error) {
      console.error(`❌ 工具調用失敗 (${toolName}):`, error.message);
      throw error;
    }
  }

  // 獲取工具列表
  async listTools() {
    if (ELK_CONFIG.mcp.protocol === 'http') {
      try {
        const mcpUrl = `${ELK_CONFIG.mcp.serverUrl}/mcp`;
        console.log('獲取 MCP 工具列表...');
        
        const requestId = Date.now();
        
        // 設置正確的 Accept 頭（服務器要求同時接受 application/json 和 text/event-stream）
        const response = await fetch(mcpUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/event-stream'
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/list',
            id: requestId
          })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        if (result.error) {
          throw new Error(`MCP Error: ${result.error.message}`);
        }
        
        return result.result;
      } catch (error) {
        console.error('❌ 工具列表獲取失敗:', error.message);
        // 回退到已知的工具列表
        return {
          tools: [
            { name: 'list_indices', description: '列出所有可用的 Elasticsearch 索引' },
            { name: 'get_mappings', description: '獲取特定索引的欄位映射' },
            { name: 'search', description: '執行 Elasticsearch 查詢 DSL' },
            { name: 'esql', description: '執行 ES|QL 查詢' },
            { name: 'get_shards', description: '獲取索引分片資訊' }
          ]
        };
      }
    } else {
      // stdio 模式：使用 MCP 客戶端
      return await this.client.listTools();
    }
  }

  // 連接到 MCP Server
  async connect() {
    const maxRetries = ELK_CONFIG.mcp.retryAttempts || 3;
    const baseDelay = 1000; // 1秒基礎延遲
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        if (attempt > 0) {
          const delay = baseDelay * Math.pow(2, attempt - 1); // 指數退避
          console.log(`🔄 重試連接 (${attempt}/${maxRetries})，等待 ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        console.log(`正在連接 ELK MCP Server (${ELK_CONFIG.mcp.protocol})...`);
        console.log(`Server URL: ${ELK_CONFIG.mcp.serverUrl}`);
        
        // 清理舊連接
        if (this.client) {
          try {
            await this.client.close();
          } catch (e) {
            // 忽略清理錯誤
          }
          this.client = null;
        }
        
        // 根據協議類型建立不同的傳輸方式
        if (ELK_CONFIG.mcp.protocol === 'http') {
          // HTTP 模式：直接使用 HTTP 請求，不需要 MCP 客戶端
          console.log('使用 HTTP 模式連接到 MCP Server...');
          await this.createHttpTransport();
          this.connected = true;
          this.retryCount = 0;
          console.log('✅ ELK MCP Server HTTP 連接成功');
          return true;
        } else if (ELK_CONFIG.mcp.protocol === 'proxy') {
          // 使用 mcp-proxy 橋接 HTTP 到 stdio
          console.log('使用 mcp-proxy 橋接到 HTTP MCP Server...');
          console.log(`mcp-proxy 路徑: ${ELK_CONFIG.mcp.proxyCommand}`);
          console.log(`mcp-proxy 參數: ${ELK_CONFIG.mcp.proxyArgs.join(' ')}`);
          
          // 跨平台檢查 mcp-proxy 是否存在
          const fs = require('fs');
          const path = require('path');
          const { execSync } = require('child_process');
          
          let proxyPath = ELK_CONFIG.mcp.proxyCommand;
          let proxyExists = false;
          
          // 如果是相對路徑或命令名稱，嘗試在 PATH 中查找
          if (!path.isAbsolute(proxyPath) || !fs.existsSync(proxyPath)) {
            try {
              // 嘗試使用 which/where 命令查找
              const whichCommand = process.platform === 'win32' ? 'where' : 'which';
              const foundPath = execSync(`${whichCommand} ${path.basename(proxyPath)}`, { 
                encoding: 'utf8',
                stdio: ['pipe', 'pipe', 'ignore']
              }).trim().split('\n')[0];
              
              if (foundPath && fs.existsSync(foundPath)) {
                proxyPath = foundPath;
                proxyExists = true;
              }
            } catch (e) {
              // which/where 命令失敗，繼續檢查其他路徑
            }
          } else {
            proxyExists = fs.existsSync(proxyPath);
          }
          
          // 如果還是找不到，嘗試 Windows 常見路徑
          if (!proxyExists && process.platform === 'win32') {
            const os = require('os');
            const localAppData = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
            const appData = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
            const possiblePaths = [
              path.join(localAppData, 'npm', 'mcp-proxy.cmd'),
              path.join(appData, 'npm', 'mcp-proxy.cmd'),
              path.join(localAppData, 'npm', 'mcp-proxy'),
              path.join(appData, 'npm', 'mcp-proxy')
            ];
            
            for (const possiblePath of possiblePaths) {
              if (fs.existsSync(possiblePath)) {
                proxyPath = possiblePath;
                proxyExists = true;
                break;
              }
            }
          }
          
          if (!proxyExists) {
            throw new Error(
              `mcp-proxy 不存在於路徑: ${ELK_CONFIG.mcp.proxyCommand}\n` +
              `已嘗試查找但未找到。請確認：\n` +
              `1. mcp-proxy 已正確安裝（npm install -g mcp-proxy 或 pipx install mcp-proxy）\n` +
              `2. 路徑正確（當前 PATH: ${process.env.PATH}）\n` +
              `3. 或在 .env 中設定 ELK_MCP_PROTOCOL=http 使用 HTTP 模式（推薦）\n` +
              `4. 或在 .env 中設定 MCP_PROXY_PATH=完整路徑 指定 mcp-proxy 位置`
            );
          }
          
          const transport = new StdioClientTransport({
            command: proxyPath,
            args: ELK_CONFIG.mcp.proxyArgs
          });

          // 建立客戶端
          this.client = new Client({
            name: "ddos-analyzer",
            version: "1.0.0"
          }, {
            capabilities: {
              tools: {}
            }
          });

          // 設置連接超時
          const connectPromise = this.client.connect(transport);
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Connection timeout')), 15000)
          );
          
          // 連接到服務器（帶超時）
          await Promise.race([connectPromise, timeoutPromise]);
          
          // 驗證連接是否真的可用
          const testResult = await this.quickConnectionTest();
          if (!testResult) {
            throw new Error('Connection established but not functional');
          }
          
          this.connected = true;
          this.retryCount = 0;
          
          console.log('✅ ELK MCP Server 連接成功並通過驗證');
          return true;
        } else {
          // 直接 stdio 傳輸
          const transport = new StdioClientTransport({
            command: ELK_CONFIG.mcp.serverCommand,
            args: ELK_CONFIG.mcp.serverArgs
          });

          // 建立客戶端
          this.client = new Client({
            name: "ddos-analyzer",
            version: "1.0.0"
          }, {
            capabilities: {
              tools: {}
            }
          });

          // 設置連接超時
          const connectPromise = this.client.connect(transport);
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Connection timeout')), 15000)
          );
          
          // 連接到服務器（帶超時）
          await Promise.race([connectPromise, timeoutPromise]);
          
          // 驗證連接是否真的可用
          const testResult = await this.quickConnectionTest();
          if (!testResult) {
            throw new Error('Connection established but not functional');
          }
          
          this.connected = true;
          this.retryCount = 0;
          
          console.log('✅ ELK MCP Server 連接成功並通過驗證');
          return true;
        }
        
      } catch (error) {
        console.error(`❌ ELK MCP Server 連接失敗 (嘗試 ${attempt + 1}/${maxRetries + 1}):`, error.message);
        this.connected = false;
        this.client = null;
        
        // 如果是最後一次嘗試，拋出錯誤
        if (attempt === maxRetries) {
          const finalError = new Error(`ELK MCP Server 連接失敗，已重試 ${maxRetries} 次: ${error.message}`);
          finalError.originalError = error;
          throw finalError;
        }
      }
    }
  }

  // 斷開連接
  async disconnect() {
    if (this.client && this.connected) {
      try {
        await this.client.close();
        this.connected = false;
        console.log('🔌 ELK MCP Server 連接已關閉');
      } catch (error) {
        console.error('關閉 MCP 連接時發生錯誤:', error.message);
      }
    }
  }

  // 確保連接狀態
  async ensureConnection() {
    // HTTP 模式：只需要驗證 HTTP 連接
    if (ELK_CONFIG.mcp.protocol === 'http') {
      if (!this.connected) {
        console.log('🔄 ELK HTTP 連接未建立，開始建立連接...');
        await this.connect();
      } else {
        // 驗證 HTTP 連接是否可用
        try {
          await this.testHttpConnection();
        } catch (error) {
          console.log('⚠️ ELK HTTP 連接驗證失敗，重新建立連接...', error.message);
          this.connected = false;
          await this.connect();
        }
      }
      return;
    }
    
    // stdio/proxy 模式：需要 MCP 客戶端
    if (!this.connected || !this.client) {
      console.log('🔄 ELK 連接未建立，開始建立連接...');
      await this.connect();
    } else {
      // 即使連接狀態顯示已連接，也要驗證連接是否真的可用
      try {
        const isWorking = await this.quickConnectionTest();
        if (!isWorking) {
          console.log('⚠️ ELK 連接可能已斷開，重新建立連接...');
          this.connected = false;
          this.client = null;
          await this.connect();
        }
      } catch (error) {
        console.log('⚠️ ELK 連接驗證失敗，重新建立連接...', error.message);
        this.connected = false;
        this.client = null;
        await this.connect();
      }
    }
  }

  // 快速連接測試（不會拋出錯誤）
  async quickConnectionTest() {
    // HTTP 模式不需要 client，直接測試 HTTP 連接
    if (ELK_CONFIG.mcp.protocol === 'http') {
      try {
        await this.testHttpConnection();
        return true;
      } catch (error) {
        return false;
      }
    }
    
    if (!this.client) {
      return false;
    }
    
    try {
      // 執行一個極簡的測試查詢
      const result = await Promise.race([
        this.client.callTool({
          name: 'search',
          arguments: {
            index: ELK_CONFIG.elasticsearch.index,
            query_body: {
              query: { match_all: {} },
              size: 1,
              timeout: '5s'
            }
          }
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Connection test timeout')), 5000)
        )
      ]);

      return !result.isError;
    } catch (error) {
      return false;
    }
  }

  // 建構 Elasticsearch 查詢
  buildElasticsearchQuery(timeRange = '1h', filters = {}) {
    // 智能時間範圍查詢策略
    let query;
    
    if (timeRange === 'auto' || timeRange === '1h') {
      // 自動模式：查詢最近的資料，不限特定時間範圍
      console.log('🔍 使用自動時間範圍，查詢最新資料...');
      query = {
        query: {
          match_all: {}
        },
        sort: [
          {
            "@timestamp": {
              order: "desc"
            }
          }
        ],
        size: 1000  // 增加資料量以確保涵蓋所有攻擊事件
      };
    } else {
      // 傳統時間範圍查詢
      const now = new Date();
      const timeRangeMs = this.parseTimeRange(timeRange);
      const fromTime = new Date(now.getTime() - timeRangeMs);
      
      console.log('🔍 使用指定時間範圍:', fromTime.toISOString(), 'to', now.toISOString());
      query = {
        query: {
          range: {
            "@timestamp": {
              gte: fromTime.toISOString(),
              lte: now.toISOString()
            }
          }
        },
        sort: [
          {
            "@timestamp": {
              order: "desc"
            }
          }
        ],
        size: 1000
      };
    }

    // 添加額外的篩選條件（如果需要的話）
    if (Object.keys(filters).length > 0) {
      // 將簡單查詢轉換為 bool 查詢以支援篩選
      if (query.query.match_all) {
        query.query = {
          bool: {
            must: [{ match_all: {} }],
            filter: []
          }
        };
      } else if (query.query.range) {
        // 保持 range 查詢結構，但包裝在 bool 查詢中以支援額外的 filter
        const rangeQuery = query.query.range;
        query.query = {
          bool: {
            must: [{
              range: rangeQuery
            }],
            filter: []
          }
        };
      }

      if (filters.clientIp && CLOUDFLARE_FIELD_MAPPING.client_ip) {
        query.query.bool.filter.push({
          term: { [CLOUDFLARE_FIELD_MAPPING.client_ip.elk_field]: filters.clientIp }
        });
      }

      if (filters.securityAction && CLOUDFLARE_FIELD_MAPPING.security_action) {
        query.query.bool.filter.push({
          term: { [CLOUDFLARE_FIELD_MAPPING.security_action.elk_field]: filters.securityAction }
        });
      }
      if (filters.minWafScore && CLOUDFLARE_FIELD_MAPPING.waf_attack_score) {
        query.query.bool.filter.push({
          range: {
            [CLOUDFLARE_FIELD_MAPPING.waf_attack_score.elk_field]: {
              lte: filters.minWafScore // WAF分數越低越危險
            }
          }
        });
      }
    }

    return query;
  }

  // 解析時間範圍
  parseTimeRange(timeRange) {
    const unit = timeRange.slice(-1);
    const value = parseInt(timeRange.slice(0, -1));
    
    const multipliers = {
      'm': 60 * 1000,      // 分鐘
      'h': 60 * 60 * 1000, // 小時
      'd': 24 * 60 * 60 * 1000 // 天
    };

    return value * (multipliers[unit] || multipliers['h']);
  }

  // 獲取必要的欄位清單
  getRequiredFields() {
    return Object.values(CLOUDFLARE_FIELD_MAPPING).map(field => field.elk_field);
  }

  // 執行 Elasticsearch 查詢
  async queryElasticsearch(timeRange = '1h', filters = {}) {
    try {
      await this.ensureConnection();
    } catch (error) {
      console.log('⚠️ 單例連接失敗，嘗試使用新實例...');
      // 如果單例連接失敗，使用新實例
      return await this.queryWithNewInstance(timeRange, filters);
    }

    try {
      const query = this.buildElasticsearchQuery(timeRange, filters);
      
      console.log('📊 執行 Elasticsearch 查詢...');
      console.log('查詢範圍:', timeRange);
      console.log('篩選條件:', filters);
      console.log('索引:', ELK_CONFIG.elasticsearch.index);
      console.log('查詢內容:', JSON.stringify(query, null, 2));
      
      // 驗證索引名稱格式
      let indexName = ELK_CONFIG.elasticsearch.index;
      if (!indexName || indexName.trim() === '') {
        throw new Error('索引名稱不能為空，請檢查 ELK_INDEX 環境變數');
      }
      
      // 清理索引名稱（移除多餘空格，確保格式正確）
      indexName = indexName.trim();
      
      // 驗證索引名稱格式（應該包含連字符和通配符）
      if (!indexName.includes('logpush') && indexName.includes('adasone-cf')) {
        console.warn('⚠️  索引名稱可能不完整，預期格式: adasone-cf-logpush-*');
        console.warn('⚠️  當前索引名稱:', indexName);
        // 嘗試自動修正
        if (indexName === 'adasone-cf*' || indexName === 'adasone-cf-*') {
          indexName = 'adasone-cf-logpush-*';
          console.log('✅ 已自動修正索引名稱為:', indexName);
        }
      }
      
      console.log('✅ 使用索引名稱:', indexName);

      // 根據協議類型選擇不同的調用方式
      let result;
      if (ELK_CONFIG.mcp.protocol === 'http') {
        // HTTP 模式：直接使用 HTTP 調用
        const searchArgs = {
          index: indexName,
          query_body: query
        };
        console.log('🔍 發送 MCP 工具調用參數:', JSON.stringify(searchArgs, null, 2));
        result = await this.callHttpTool('search', searchArgs);
        
        // 將 HTTP 回應轉換為 MCP 格式
        result = {
          isError: false,
          content: [
            { type: 'text', text: JSON.stringify(result) }
          ]
        };
      } else {
        // stdio/proxy 模式：使用 MCP 客戶端
        const searchArgs = {
          index: indexName,
          query_body: query
        };
        console.log('🔍 發送 MCP 工具調用參數 (stdio/proxy):', JSON.stringify(searchArgs, null, 2));
        result = await this.client.callTool({
          name: 'search',
          arguments: searchArgs
        });
      }

      if (result.isError) {
        throw new Error(`Elasticsearch 查詢錯誤: ${result.content[0]?.text || 'Unknown error'}`);
      }

      // 處理 MCP Server 的文本回應
      const responseText = result.content[0]?.text || '';
      console.log('MCP Server 回應 (摘要):', responseText.substring(0, 200) + '...');
      
      // 檢查是否有第二個 content（實際的資料）
      const dataText = result.content[1]?.text || responseText;
      console.log('實際資料長度:', dataText.length, '前 100 字元:', dataText.substring(0, 100));
      
      // 嘗試解析 JSON 回應
      let responseData;
      try {
        // 首先嘗試解析為記錄陣列（最常見的情況）
        const records = JSON.parse(dataText);
        if (Array.isArray(records)) {
          console.log(`✅ 解析為記錄陣列，找到 ${records.length} 筆記錄`);
          return {
            total: records.length,
            hits: records.map((record, index) => ({
              id: record.RayID || record._id || index.toString(),
              source: record,
              timestamp: record["@timestamp"]
            }))
          };
        } else {
          // 如果不是陣列，可能是標準 Elasticsearch 格式
          responseData = records;
        }
      } catch (e) {
        // 如果都無法解析，嘗試從摘要中提取數字
        console.log('回應不是 JSON 格式，嘗試解析摘要');
        const match = responseText.match(/Total results: (\d+)/);
        if (match) {
          const totalCount = parseInt(match[1]);
          console.log(`從摘要中發現 ${totalCount} 筆記錄，但無法解析詳細資料`);
          // 如果有資料但無法解析，回傳簡化的模擬資料
          if (totalCount > 0) {
            return {
              total: totalCount,
              hits: [],
              summary: `發現 ${totalCount} 筆記錄，但資料格式無法解析`
            };
          }
        }
        return {
          total: 0,
          hits: [],
          summary: responseText
        };
      }
      
      // 處理標準 Elasticsearch 回應格式
      const hits = responseData.hits?.hits || [];

      console.log(`✅ 查詢完成，找到 ${hits.length} 筆記錄`);
      
      return {
        total: responseData.hits?.total?.value || hits.length,
        hits: hits.map(hit => ({
          id: hit._id,
          source: hit._source,
          timestamp: hit._source["@timestamp"]
        }))
      };

    } catch (error) {
      console.error('❌ Elasticsearch 查詢失敗:', error.message);
      throw error;
    }
  }

  // 獲取攻擊相關的日誌
  async getAttackLogs(timeRange = '1h') {
    return await this.queryElasticsearch(timeRange, {
      minWafScore: 80, // WAF 分數 80 以下視為攻擊
      securityAction: 'block' // 被阻擋的請求
    });
  }

  // 獲取特定 IP 的活動
  async getIPActivity(clientIp, timeRange = '1h') {
    return await this.queryElasticsearch(timeRange, {
      clientIp: clientIp
    });
  }

  // 獲取安全事件統計
  async getSecurityStats(timeRange = '1h') {
    await this.ensureConnection();

    try {
      // 將時間範圍轉換為 ISO 8601 格式（不使用相對時間格式）
      const now = new Date();
      const timeRangeMs = this.parseTimeRange(timeRange);
      const fromTime = new Date(now.getTime() - timeRangeMs);
      
      // 建構聚合查詢
      const aggregationQuery = {
        query: {
          range: {
            "@timestamp": {
              gte: fromTime.toISOString(),
              lte: now.toISOString()
            }
          }
        },
        aggs: {
          security_actions: {
            terms: {
              field: CLOUDFLARE_FIELD_MAPPING.security_action.elk_field,
              size: 10
            }
          },
          top_countries: {
            terms: {
              field: CLOUDFLARE_FIELD_MAPPING.client_country.elk_field,
              size: 10
            }
          },
          top_ips: {
            terms: {
              field: CLOUDFLARE_FIELD_MAPPING.client_ip.elk_field,
              size: 10
            }
          },
          waf_score_stats: {
            stats: {
              field: CLOUDFLARE_FIELD_MAPPING.waf_attack_score.elk_field
            }
          }
        },
        size: 0
      };

      // 驗證索引名稱
      let indexName = ELK_CONFIG.elasticsearch.index;
      if (!indexName || indexName.trim() === '') {
        throw new Error('索引名稱不能為空，請檢查 ELK_INDEX 環境變數');
      }
      
      // 清理索引名稱（移除多餘空格，確保格式正確）
      indexName = indexName.trim();
      
      // 驗證索引名稱格式（應該包含連字符和通配符）
      if (!indexName.includes('logpush') && indexName.includes('adasone-cf')) {
        console.warn('⚠️  索引名稱可能不完整，預期格式: adasone-cf-logpush-*');
        console.warn('⚠️  當前索引名稱:', indexName);
        // 嘗試自動修正
        if (indexName === 'adasone-cf*' || indexName === 'adasone-cf-*') {
          indexName = 'adasone-cf-logpush-*';
          console.log('✅ 已自動修正索引名稱為:', indexName);
        }
      }
      
      console.log('✅ 統計查詢使用索引名稱:', indexName);
      console.log('📊 聚合查詢內容:', JSON.stringify(aggregationQuery, null, 2));

      let result;
      
      if (ELK_CONFIG.mcp.protocol === 'http') {
        // HTTP 模式：使用 callHttpTool
        const searchArgs = {
          index: indexName,
          query_body: aggregationQuery
        };
        console.log('🔍 發送統計查詢 MCP 工具調用參數:', JSON.stringify(searchArgs, null, 2));
        result = await this.callHttpTool('search', searchArgs);
        
        // 將 HTTP 回應轉換為 MCP 格式
        result = {
          isError: false,
          content: [
            { type: 'text', text: JSON.stringify(result) }
          ]
        };
      } else {
        // stdio/proxy 模式：使用 MCP 客戶端
        const searchArgs = {
          index: indexName,
          query_body: aggregationQuery
        };
        console.log('🔍 發送統計查詢 MCP 工具調用參數 (stdio/proxy):', JSON.stringify(searchArgs, null, 2));
        result = await this.client.callTool({
          name: 'search',
          arguments: searchArgs
        });
      }

      if (result.isError) {
        throw new Error(`統計查詢錯誤: ${result.content[0]?.text || 'Unknown error'}`);
      }

      // 處理回應
      let responseData;
      const responseText = result.content[0]?.text || '';
      
      try {
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        // 如果解析失敗，嘗試從其他 content 中獲取
        const dataText = result.content[1]?.text || responseText;
        responseData = JSON.parse(dataText);
      }
      
      return responseData.aggregations || {};

    } catch (error) {
      console.error('❌ 安全統計查詢失敗:', error.message);
      throw error;
    }
  }

  // 檢查連接狀態
  isConnected() {
    // HTTP 模式：只需要檢查 connected 狀態
    if (ELK_CONFIG.mcp.protocol === 'http') {
      return this.connected;
    }
    // stdio/proxy 模式：需要檢查 connected 和 client
    return this.connected && this.client;
  }

  // 重置客戶端狀態（解決狀態污染問題）
  async resetClientState() {
    console.log('🔄 重置 ELK MCP 客戶端狀態...');
    
    // 強制斷開現有連接
    if (this.client) {
      try {
        await this.client.close();
      } catch (error) {
        // 忽略關閉錯誤
      }
    }
    
    // 重置所有狀態
    this.client = null;
    this.connected = false;
    this.retryCount = 0;
    
    console.log('✅ 客戶端狀態已重置');
  }

  // 使用新實例執行查詢（回退機制）
  async queryWithNewInstance(timeRange = '1h', filters = {}) {
    console.log('🆕 使用新實例執行 Elasticsearch 查詢...');
    
    const newClient = new ElkMCPClient();
    
    try {
      await newClient.connect();
      
      const query = newClient.buildElasticsearchQuery(timeRange, filters);
      
      console.log('📊 執行 Elasticsearch 查詢（新實例）...');
      console.log('查詢範圍:', timeRange);
      console.log('篩選條件:', filters);
      
      // 使用新實例執行查詢
      const result = await newClient.client.callTool({
        name: 'search',
        arguments: {
          index: ELK_CONFIG.elasticsearch.index,
          query_body: query
        }
      });

      if (result.isError) {
        throw new Error(`Elasticsearch 查詢錯誤: ${result.content[0]?.text || 'Unknown error'}`);
      }

      // 處理回應（使用與原方法相同的邏輯）
      const responseText = result.content[0]?.text || '';
      const dataText = result.content[1]?.text || responseText;
      
      let responseData;
      try {
        const records = JSON.parse(dataText);
        if (Array.isArray(records)) {
          console.log('✅ 解析為記錄陣列，找到', records.length, '筆記錄');
          responseData = { hits: records };
        } else {
          responseData = records;
        }
      } catch (parseError) {
        throw new Error(`回應解析失敗: ${parseError.message}`);
      }

      console.log('✅ 新實例查詢成功');
      return responseData;
      
    } finally {
      // 清理新實例
      await newClient.disconnect();
    }
  }

  // 測試連接
  async testConnection() {
    try {
      // 🔧 使用新實例進行測試（避免單例狀態污染）
      console.log('🔬 使用新實例測試 ELK MCP 連接...');
      const testClient = new ElkMCPClient();
      
      await testClient.connect();
      
      // 執行簡單的測試查詢
      const testResult = await testClient.client.callTool({
        name: 'search',
        arguments: {
          index: ELK_CONFIG.elasticsearch.index,
          query_body: {
            query: { match_all: {} },
            size: 1
          }
        }
      });

      const success = !testResult.isError;
      
      // 清理測試實例
      await testClient.disconnect();
      
      if (success) {
        console.log('✅ ELK MCP 連接測試成功');
        // 如果測試成功，重置單例狀態並建立新連接
        await this.resetClientState();
        await this.ensureConnection();
      }
      
      return success;
    } catch (error) {
      console.error('連接測試失敗:', error.message);
      return false;
    }
  }
}

// 建立單例實例
const elkMCPClient = new ElkMCPClient();

// 優雅關閉處理
process.on('SIGINT', async () => {
  console.log('\n正在關閉 ELK MCP 連接...');
  await elkMCPClient.disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n正在關閉 ELK MCP 連接...');
  await elkMCPClient.disconnect();
  process.exit(0);
});

module.exports = { ElkMCPClient, elkMCPClient }; 