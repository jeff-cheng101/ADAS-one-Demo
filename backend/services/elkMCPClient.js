// ELK MCP 客戶端服務
// 處理與 Elasticsearch MCP Server 的通信

const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
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
      const sessionUrl = `${ELK_CONFIG.mcp.serverUrl}/mcp`;
      console.log('建立 MCP 會話...');
      
      // 發送初始化請求建立會話
      const response = await fetch(sessionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/event-stream'
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'initialize',
          id: 1,
          params: {
            protocolVersion: '2024-11-05',
            capabilities: {
              tools: {}
            },
            clientInfo: {
              name: 'ddos-analyzer',
              version: '1.0.0'
            }
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      // MCP Server 返回 SSE 格式，需要解析 'data: ' 前綴
      const responseText = await response.text();
      
      // 處理 SSE 格式: "data: {JSON}"
      let jsonText = responseText;
      if (responseText.startsWith('data: ')) {
        jsonText = responseText.substring(6); // 移除 "data: " 前綴
      }
      
      const result = JSON.parse(jsonText);
      console.log('✅ MCP 會話建立成功');
      
      // 儲存會話資訊
      this.sessionId = result.id || 'default';
      this.serverCapabilities = result.result?.capabilities || {};
      
      return true;
    } catch (error) {
      console.error('❌ MCP 會話建立失敗:', error.message);
      throw error;
    }
  }

  // 測試 HTTP 連接
  async testHttpConnection() {
    try {
      // 嘗試多個可能的端點
      const testUrls = [
        `${ELK_CONFIG.mcp.serverUrl}/ping`,
        `${ELK_CONFIG.mcp.serverUrl}/mcp`,
        `${ELK_CONFIG.mcp.serverUrl}/`
      ];
      
      let lastError = null;
      
      for (const testUrl of testUrls) {
        try {
          console.log(`測試 MCP Server 連接: ${testUrl}`);
          
          const response = await fetch(testUrl, {
            method: 'GET',
            signal: AbortSignal.timeout(5000)
          });
          
          // 即使返回錯誤狀態碼，也說明服務器是可達的
          if (response.status < 500) {
            console.log(`✅ MCP Server HTTP 連接測試成功 (${testUrl})`);
            return true;
          }
          
          lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
        } catch (error) {
          lastError = error;
          // 繼續嘗試下一個 URL
          continue;
        }
      }
      
      // 如果所有 URL 都失敗，拋出最後一個錯誤
      throw lastError || new Error('無法連接到 MCP Server');
    } catch (error) {
      console.error('❌ MCP Server HTTP 連接測試失敗:', error.message);
      // 如果是超時或連接錯誤，提供更詳細的錯誤訊息
      if (error.name === 'TimeoutError' || error.message.includes('ECONNREFUSED')) {
        throw new Error(`無法連接到 MCP Server (${ELK_CONFIG.mcp.serverUrl})，請確認服務器正在運行`);
      }
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
      const response = await fetch(mcpUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/event-stream'
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'tools/call',
          id: requestId,
          params: {
            name: toolName,
            arguments: args
          }
        }),
        // 增加超時時間到600秒，適應超大數據量查詢和數據密集時段
        signal: AbortSignal.timeout(600000)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      // MCP Server 返回 SSE 格式，需要解析 'data: ' 前綴
      const responseText = await response.text();
      
      // 處理 SSE 格式: "data: {JSON}"
      let jsonText = responseText;
      if (responseText.startsWith('data: ')) {
        jsonText = responseText.substring(6); // 移除 "data: " 前綴
      }
      
      // 解析 JSON 響應
      const result = JSON.parse(jsonText);
      
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
        
        // MCP Server 返回 SSE 格式，需要解析 'data: ' 前綴
        const responseText = await response.text();
        
        // 處理 SSE 格式: "data: {JSON}"
        let jsonText = responseText;
        if (responseText.startsWith('data: ')) {
          jsonText = responseText.substring(6); // 移除 "data: " 前綴
        }
        
        const result = JSON.parse(jsonText);
        
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
        
        // HTTP 協議：直接使用 HTTP 調用，不需要 MCP 客戶端連接
        if (ELK_CONFIG.mcp.protocol === 'http') {
          console.log('使用 HTTP 協議直接連接...');
          
          // 測試 HTTP 連接
          await this.testHttpConnection();
          
          // 建立 HTTP 會話
          await this.createHttpSession();
          
          this.connected = true;
          this.retryCount = 0;
          this.client = null; // HTTP 模式不需要 MCP 客戶端
          
          console.log('✅ ELK MCP Server HTTP 連接成功');
          return true;
        }
        
        // 清理舊連接
        if (this.client) {
          try {
            await this.client.close();
          } catch (e) {
            // 忽略清理錯誤
          }
          this.client = null;
        }
        
        let transport;
        
        // 根據協議類型建立不同的傳輸方式
        if (ELK_CONFIG.mcp.protocol === 'proxy') {
          // 使用 mcp-proxy 橋接 HTTP 到 stdio
          console.log('使用 mcp-proxy 橋接到 HTTP MCP Server...');
          
          // 檢查 mcp-proxy 是否存在
          const proxyCommand = ELK_CONFIG.mcp.proxyCommand;
          const proxyPath = path.isAbsolute(proxyCommand) ? proxyCommand : proxyCommand;
          
          try {
            // 檢查文件是否存在（Windows 需要檢查 .exe 擴展名）
            const possiblePaths = [
              proxyPath,
              proxyPath + '.exe',
              proxyPath + '.cmd',
              proxyPath + '.bat'
            ];
            
            let foundPath = null;
            for (const testPath of possiblePaths) {
              try {
                if (fs.existsSync(testPath)) {
                  foundPath = testPath;
                  break;
                }
              } catch (e) {
                // 繼續檢查下一個路徑
              }
            }
            
            // 如果找不到文件，嘗試在系統 PATH 中查找
            if (!foundPath) {
              // 在 Windows 上，嘗試使用 where 命令查找
              const { execSync } = require('child_process');
              try {
                const commandName = path.basename(proxyPath).replace(/\.(exe|cmd|bat)$/, '');
                if (process.platform === 'win32') {
                  const whereResult = execSync(`where ${commandName}`, { encoding: 'utf8', stdio: 'pipe' });
                  if (whereResult.trim()) {
                    foundPath = whereResult.trim().split('\n')[0];
                    console.log(`✅ 在系統 PATH 中找到 mcp-proxy: ${foundPath}`);
                  }
                } else {
                  const whichResult = execSync(`which ${commandName}`, { encoding: 'utf8', stdio: 'pipe' });
                  if (whichResult.trim()) {
                    foundPath = whichResult.trim();
                    console.log(`✅ 在系統 PATH 中找到 mcp-proxy: ${foundPath}`);
                  }
                }
              } catch (e) {
                // where/which 命令失敗，繼續使用原始路徑
              }
            }
            
            if (!foundPath) {
              // 自動回退到 HTTP 協議
              console.warn(`⚠️ 找不到 mcp-proxy 工具 (${proxyPath})`);
              console.log(`🔄 自動切換到 HTTP 協議...`);
              
              // 直接執行 HTTP 連接邏輯（避免遞歸）
              try {
                // 測試 HTTP 連接
                await this.testHttpConnection();
                
                // 建立 HTTP 會話
                await this.createHttpSession();
                
                this.connected = true;
                this.retryCount = 0;
                this.client = null; // HTTP 模式不需要 MCP 客戶端
                
                console.log('✅ ELK MCP Server HTTP 連接成功（自動回退）');
                return true;
              } catch (httpError) {
                const errorMsg = `❌ 無法使用 proxy 協議（mcp-proxy 不存在），且 HTTP 協議也失敗\n` +
                  `   Proxy 錯誤: mcp-proxy 工具不存在於 ${proxyPath}\n` +
                  `   HTTP 錯誤: ${httpError.message}\n` +
                  `   建議解決方案:\n` +
                  `   1. 安裝 mcp-proxy 工具並設置 ELK_MCP_PROXY_COMMAND\n` +
                  `   2. 或確保 MCP Server 在 ${ELK_CONFIG.mcp.serverUrl} 運行\n` +
                  `   3. 或設置環境變數 ELK_MCP_PROTOCOL=http 直接使用 HTTP 協議`;
                throw new Error(errorMsg);
              }
            }
            
            // 使用找到的路徑
            transport = new StdioClientTransport({
              command: foundPath,
              args: ELK_CONFIG.mcp.proxyArgs
            });
          } catch (error) {
            // 如果檢查失敗，提供更詳細的錯誤訊息
            if (error.message.includes('mcp-proxy 工具不存在')) {
              throw error;
            }
            // 其他錯誤，嘗試繼續但會記錄警告
            console.warn(`⚠️ 無法驗證 mcp-proxy 路徑，嘗試繼續: ${error.message}`);
            transport = new StdioClientTransport({
              command: proxyCommand,
              args: ELK_CONFIG.mcp.proxyArgs
            });
          }
        } else {
          // 直接 stdio 傳輸
          transport = new StdioClientTransport({
            command: ELK_CONFIG.mcp.serverCommand,
            args: ELK_CONFIG.mcp.serverArgs
          });
        }

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
        console.log(`RYCHENGA connectPromise: ${JSON.stringify(transport)}`);
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
    try {
      // 根據協議類型選擇合適的調用方式
      if (ELK_CONFIG.mcp.protocol === 'proxy' || ELK_CONFIG.mcp.protocol === 'http') {
        // HTTP 協議模式：使用HTTP調用
        const result = await Promise.race([
          this.callHttpTool('search', {
            index: ELK_CONFIG.elasticsearch.index,
            query_body: {
              query: { match_all: {} },
              size: 1,
              timeout: '5s'
            }
          }),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Connection test timeout')), 5000)
          )
        ]);
        
        return !result.isError;
      } else {
        // stdio 協議模式：使用原始客戶端調用
        if (!this.client) {
          return false;
        }
        
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
      }
    } catch (error) {
      return false;
    }
  }

  // 建構 Elasticsearch 自定義時間查詢
  buildElasticsearchCustomTimeQuery(startTime, endTime, filters = {}) {
    console.log('🔍 建構自定義時間範圍查詢:', startTime, 'to', endTime);
    
    const query = {
      query: {
        range: {
          "@timestamp": {
            gte: startTime,
            lte: endTime
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
      size: 5000  // 增加查詢大小以確保涵蓋自定義時間範圍內的所有資料
    };

    // 添加額外的篩選條件（如果需要的話）
    if (Object.keys(filters).length > 0) {
      query.query = {
        bool: {
          must: [
            query.query,
            ...Object.entries(filters).map(([field, value]) => ({
              term: { [field]: value }
            }))
          ]
        }
      };
    }

    return query;
  }

  // 建構 Elasticsearch 查詢
  buildElasticsearchQuery(timeRange = '1h', filters = {}) {
    // 簡化查詢策略，減少超時風險
    let query;
    
    if (timeRange === 'auto' || timeRange === '1h') {
      // 自動模式：查詢最近15分鐘的資料，限制數量
      console.log('🔍 使用自動時間範圍，查詢最近15分鐘資料...');
      const now = new Date();
      const fromTime = new Date(now.getTime() - 15 * 60 * 1000); // 15分鐘
      
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
        size: ELK_CONFIG.elasticsearch.maxResults  // 使用配置文件設定的最大結果數
      };
    } else {
      // 指定時間範圍查詢，支援長時間範圍（配合分段查詢使用）
      const now = new Date();
      let timeRangeMs = this.parseTimeRange(timeRange);
      
      // 移除2小時硬限制，改為警告提示但不強制限制
      // 長時間範圍由上層的分段查詢功能處理
      if (timeRangeMs > 2 * 60 * 60 * 1000) {
        console.log(`⚠️ 檢測到長時間範圍 (${timeRange})，建議使用分段查詢功能以獲得最佳性能`);
      }
      
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
        size: ELK_CONFIG.elasticsearch.maxResults  // 使用配置文件設定的最大結果數
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
        const rangeQuery = query.query.range;
        query.query = {
          bool: {
            must: [{ range: rangeQuery }],
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

  // 執行 Elasticsearch 查詢 (自定義時間範圍)
  async queryElasticsearchCustomTime(startTime, endTime, filters = {}) {
    try {
      await this.ensureConnection();
    } catch (error) {
      console.log('⚠️ 單例連接失敗，嘗試使用新實例...');
      // 如果單例連接失敗，使用新實例
      return await this.queryWithNewInstanceCustomTime(startTime, endTime, filters);
    }

    try {
      const query = this.buildElasticsearchCustomTimeQuery(startTime, endTime, filters);
      
      console.log('📊 執行 Elasticsearch 自定義時間查詢...');
      console.log('查詢時間範圍:', startTime, '到', endTime);
      console.log('篩選條件:', filters);
      console.log('索引:', ELK_CONFIG.elasticsearch.index);
      console.log('查詢內容:', JSON.stringify(query, null, 2));

      // 使用 HTTP MCP 工具執行查詢（支援更長的 timeout）
      const result = await this.callHttpTool('search', {
        index: ELK_CONFIG.elasticsearch.index,
        query_body: query
      });

      return this.parseElasticsearchResponse(result);
    } catch (error) {
      console.error('❌ Elasticsearch 自定義時間查詢失敗:', error.message);
      
      // 如果是連接相關錯誤，嘗試使用新實例重試
      if (error.message.includes('Connection closed') || 
          error.message.includes('MCP error -32000') ||
          error.code === -32000) {
        console.log('🔄 檢測到連接問題，使用新實例重試自定義時間查詢...');
        try {
          return await this.queryWithNewInstanceCustomTime(startTime, endTime, filters);
        } catch (retryError) {
          console.error('❌ 新實例自定義時間查詢重試也失敗:', retryError.message);
          throw retryError;
        }
      }
      
      throw error;
    }
  }

  // 使用新實例執行自定義時間查詢（備用方案）
  async queryWithNewInstanceCustomTime(startTime, endTime, filters = {}) {
    console.log('🔄 嘗試使用新的 MCP 實例進行自定義時間查詢...');
    
    const newClient = new ElkMCPClient();
    try {
      await newClient.connect();
      const query = newClient.buildElasticsearchCustomTimeQuery(startTime, endTime, filters);
      
      // 使用 HTTP MCP 工具執行查詢（支援更長的 timeout）
      const result = await newClient.callHttpTool('search', {
        index: ELK_CONFIG.elasticsearch.index,
        query_body: query
      });

      return newClient.parseElasticsearchResponse(result);
    } catch (error) {
      console.error('❌ 新實例自定義時間查詢也失敗:', error);
      throw error;
    } finally {
      await newClient.disconnect();
    }
  }

  // 解析 Elasticsearch 響應
  parseElasticsearchResponse(result) {
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

      // 使用 HTTP MCP 工具執行查詢（支援更長的 timeout）
      const result = await this.callHttpTool('search', {
        index: ELK_CONFIG.elasticsearch.index,
        query_body: query
      });

      return this.parseElasticsearchResponse(result);

    } catch (error) {
      console.error('❌ Elasticsearch 查詢失敗:', error.message);
      
      // 如果是連接相關錯誤，嘗試使用新實例重試
      if (error.message.includes('Connection closed') || 
          error.message.includes('MCP error -32000') ||
          error.code === -32000) {
        console.log('🔄 檢測到連接問題，使用新實例重試...');
        try {
          return await this.queryWithNewInstance(timeRange, filters);
        } catch (retryError) {
          console.error('❌ 新實例重試也失敗:', retryError.message);
          throw retryError;
        }
      }
      
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
      // 建構聚合查詢
      const aggregationQuery = {
        query: {
          range: {
            "@timestamp": {
              gte: `now-${timeRange}`,
              lte: 'now'
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

      // 使用 HTTP MCP 工具執行統計查詢（支援更長的 timeout）
      const result = await this.callHttpTool('search', {
        index: ELK_CONFIG.elasticsearch.index,
        query_body: aggregationQuery
      });

      if (result.isError) {
        throw new Error(`統計查詢錯誤: ${result.content[0]?.text || 'Unknown error'}`);
      }

      const responseData = JSON.parse(result.content[0]?.text || '{}');
      return responseData.aggregations || {};

    } catch (error) {
      console.error('❌ 安全統計查詢失敗:', error.message);
      throw error;
    }
  }

  // 檢查連接狀態
  isConnected() {
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
      
      // 使用新實例執行查詢（支援更長的 timeout）
      const result = await newClient.callHttpTool('search', {
        index: ELK_CONFIG.elasticsearch.index,
        query_body: query
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
      // 根據協議類型選擇測試方式
      if (ELK_CONFIG.mcp.protocol === 'proxy' || ELK_CONFIG.mcp.protocol === 'http') {
        // HTTP 協議模式：直接使用HTTP調用測試
        console.log('🔬 使用HTTP協議測試 ELK MCP 連接...');
        
        // 先測試HTTP連接
        await this.testHttpConnection();
        
        // 執行簡單的測試查詢
        const testResult = await this.callHttpTool('search', {
          index: ELK_CONFIG.elasticsearch.index,
          query_body: {
            query: { match_all: {} },
            size: 1
          }
        });

        const success = !testResult.isError;
        
        if (success) {
          console.log('✅ ELK MCP HTTP 連接測試成功');
          // 如果測試成功，重置單例狀態並建立新連接
          await this.resetClientState();
          await this.ensureConnection();
        }
        
        return success;
      } else {
        // stdio 協議模式：使用新實例進行測試（避免單例狀態污染）
        console.log('🔬 使用stdio協議測試 ELK MCP 連接...');
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
          console.log('✅ ELK MCP stdio 連接測試成功');
          // 如果測試成功，重置單例狀態並建立新連接
          await this.resetClientState();
          await this.ensureConnection();
        }
        
        return success;
      }
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