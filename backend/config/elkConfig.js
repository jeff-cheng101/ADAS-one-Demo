// ELK 連接配置檔案
// 包含 MCP 連接設定、OWASP 參考連結和預設配置

const path = require('path');

// 跨平台路徑處理函數
function getProxyCommand() {
  // 優先使用環境變數
  if (process.env.ELK_MCP_PROXY_COMMAND) {
    return process.env.ELK_MCP_PROXY_COMMAND;
  }
  
  // 跨平台主目錄路徑
  const homeDir = process.env.HOME || process.env.USERPROFILE || process.env.HOMEPATH || '';
  
  if (!homeDir) {
    console.warn('⚠️ 無法確定主目錄路徑，請設置 ELK_MCP_PROXY_COMMAND 環境變數');
    return 'mcp-proxy'; // 回退到系統 PATH
  }
  
  // 使用 path.join 確保跨平台兼容性
  return path.join(homeDir, '.local', 'bin', 'mcp-proxy');
}

const ELK_CONFIG = {
  // MCP 連接配置
  mcp: {
    // HTTP MCP Server URL（您的 MCP 服務位址）
    serverUrl: process.env.ELK_MCP_SERVER_URL || 'http://127.0.0.1:8080',
    
    // 協議類型：'proxy' 使用 mcp-proxy 橋接, 'http' 直接使用 HTTP, 'stdio' 直接使用 stdio
    protocol: process.env.ELK_MCP_PROTOCOL || 'http', // 預設改為 http，更適合 Windows
    
    // mcp-proxy 模式配置（推薦用於 Linux/Mac）
    proxyCommand: getProxyCommand(),
    proxyArgs: [
      '--transport=streamablehttp',
      process.env.ELK_MCP_PROXY_URL || `${process.env.ELK_MCP_SERVER_URL || 'http://127.0.0.1:8080'}/mcp`
    ],
    
    // stdio 模式配置（備用）
    serverCommand: process.env.ELK_MCP_COMMAND || 'docker',
    serverArgs: process.env.ELK_MCP_ARGS ? process.env.ELK_MCP_ARGS.split(',') : [
      'run', '--rm',
      '--network', 'host',
      'docker.elastic.co/mcp/elasticsearch',
      'stdio'
    ],
    
    // 連接配置
    timeout: parseInt(process.env.ELK_MCP_TIMEOUT) || 240000,  // 4分鐘，適應月度查詢需求
    retryAttempts: parseInt(process.env.ELK_MCP_RETRY) || 3
  },

  // Elasticsearch 連接配置
  elasticsearch: {
    host: process.env.ELK_HOST || 'https://10.168.10.250:9200',
    index: process.env.ELK_INDEX || 'adasone-cf-logpush-*',
    apiKey: process.env.ELK_API_KEY || 'Z3h5NE1KZ0JXTG9ZV1JjU3pleTA6b2Nfd1FEWjZfUTZmYVZHaW1kRzB6dw==',
    maxResults: parseInt(process.env.ELK_MAX_RESULTS) || 10000
  },

  // 查詢配置
  query: {
    defaultTimeRange: process.env.ELK_TIME_RANGE || '1h', // 1小時
    maxTimeRange: process.env.ELK_MAX_TIME_RANGE || '24h', // 最大24小時
    attackThreshold: parseInt(process.env.ELK_ATTACK_THRESHOLD) || 20, // DDoS 攻擊閾值
    timeWindowSeconds: parseInt(process.env.ELK_TIME_WINDOW) || 10 // 時間窗口
  }
};

// OWASP Top 10 參考連結配置
const OWASP_REFERENCES = {
  // 主要參考連結
  mainReferences: [
    'https://owasp.org/www-project-top-ten/',
    'https://owasp.org/Top10/',
    'https://cheatsheetseries.owasp.org/'
  ],

  // 具體攻擊類型對應
  attackTypes: {
    'A01_Broken_Access_Control': {
      title: 'A01:2021 – 存取控制漏洞',
      url: 'https://owasp.org/Top10/A01_2021-Broken_Access_Control/',
      patterns: ['/.env', '/.git/', '/admin/', '/wp-admin/', '/.aws/', '/config/'],
      description: '未經授權存取敏感檔案或管理功能'
    },
    'A02_Cryptographic_Failures': {
      title: 'A02:2021 – 加密機制失效',
      url: 'https://owasp.org/Top10/A02_2021-Cryptographic_Failures/',
      patterns: ['/ssl/', '/tls/', '/cert/', '/key/', '/private/'],
      description: '加密實作不當或敏感資料未加密'
    },
    'A03_Injection': {
      title: 'A03:2021 – 注入攻擊',
      url: 'https://owasp.org/Top10/A03_2021-Injection/',
      patterns: ['SELECT', 'UNION', 'DROP', '<script>', 'javascript:', 'eval('],
      description: 'SQL注入、XSS、命令注入等攻擊'
    },
    'A04_Insecure_Design': {
      title: 'A04:2021 – 不安全設計',
      url: 'https://owasp.org/Top10/A04_2021-Insecure_Design/',
      patterns: ['/test/', '/debug/', '/dev/', '/staging/'],
      description: '設計階段的安全缺陷'
    },
    'A05_Security_Misconfiguration': {
      title: 'A05:2021 – 安全設定缺陷',
      url: 'https://owasp.org/Top10/A05_2021-Security_Misconfiguration/',
      patterns: ['/config.php', '/wp-config.php', '/.htaccess', '/web.config'],
      description: '不安全的預設配置或錯誤配置'
    },
    'A06_Vulnerable_Components': {
      title: 'A06:2021 – 易受攻擊的元件',
      url: 'https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/',
      patterns: ['/vendor/', '/node_modules/', '/lib/', '/plugins/'],
      description: '使用已知漏洞的第三方元件'
    },
    'A07_Authentication_Failures': {
      title: 'A07:2021 – 認證機制失效',
      url: 'https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/',
      patterns: ['/login', '/auth/', '/password', '/reset', '/forgot'],
      description: '認證實作不當或密碼策略薄弱'
    },
    'A08_Software_Integrity_Failures': {
      title: 'A08:2021 – 軟體完整性失效',
      url: 'https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/',
      patterns: ['/update/', '/upgrade/', '/patch/', '/install/'],
      description: '軟體更新和CI/CD管道的完整性問題'
    },
    'A09_Logging_Failures': {
      title: 'A09:2021 – 安全記錄及監控失效',
      url: 'https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/',
      patterns: ['/log/', '/audit/', '/monitor/'],
      description: '記錄不足或監控機制失效'
    },
    'A10_SSRF': {
      title: 'A10:2021 – 伺服器端請求偽造',
      url: 'https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/',
      patterns: ['http://', 'https://', 'ftp://', 'file://'],
      description: '伺服器被誘導發送惡意請求'
    }
  }
};

// 攻擊路徑分類配置
const ATTACK_PATH_CATEGORIES = {
  'Environment Files': {
    patterns: ['.env', '.config'],
    description: '環境配置檔案，通常包含敏感資訊如資料庫密碼、API金鑰'
  },
  'Configuration Files': {
    patterns: ['config', '.yml', '.xml'],
    description: '系統配置檔案，可能暴露服務配置和敏感設定'
  },
  'Admin Panels': {
    patterns: ['admin', 'wp-admin'],
    description: '管理介面，攻擊者試圖獲取管理權限'
  },
  'Version Control': {
    patterns: ['.git', '.svn'],
    description: '版本控制系統檔案，可能洩露源碼和開發資訊'
  },
  'System Information': {
    patterns: ['phpinfo', 'info.php'],
    description: '系統資訊頁面，可能暴露伺服器配置詳情'
  },
  'API Configuration': {
    patterns: ['firebase', 'api'],
    description: 'API配置檔案，可能包含第三方服務金鑰'
  },
  'Script Files': {
    patterns: ['.php', '.asp'],
    description: '腳本檔案，攻擊者可能嘗試執行或探測漏洞'
  },
  'Database Access': {
    patterns: ['phpmyadmin', 'adminer', '.sql'],
    description: '資料庫管理工具或SQL檔案'
  },
  'Backup Files': {
    patterns: ['.backup', '.bak', '.old', '.tmp'],
    description: '備份檔案，可能包含敏感資料或舊版漏洞'
  },
  'Development Files': {
    patterns: ['.log', 'debug', 'test', 'dev'],
    description: '開發相關檔案，可能洩露開發資訊'
  },
  // 🆕 新增攻擊類型示例
  'Container Escape': {
    patterns: ['docker', 'kubernetes', 'k8s', '.kube', 'containerd', 'podman'],
    description: '容器逃逸攻擊，試圖從容器環境逃脫到主機系統'
  },
  'AI/ML Models': {
    patterns: ['.pkl', '.pt', '.pth', '.onnx', '.h5', '.pb', 'model', 'checkpoint'],
    description: 'AI/ML 模型攻擊，針對機器學習模型檔案和訓練數據'
  }
};

// 輔助函數：根據攻擊模式識別 OWASP 類型
const identifyOWASPType = (uri, userAgent, securityRules) => {
  const detectedTypes = [];
  
  // 檢查 URI 模式
  for (const [typeKey, typeInfo] of Object.entries(OWASP_REFERENCES.attackTypes)) {
    for (const pattern of typeInfo.patterns) {
      if (uri && uri.toLowerCase().includes(pattern.toLowerCase())) {
        detectedTypes.push({
          type: typeKey,
          title: typeInfo.title,
          url: typeInfo.url,
          description: typeInfo.description,
          matchedPattern: pattern,
          confidence: 'high'
        });
        break;
      }
    }
  }
  
  // 檢查 User Agent 模式
  if (userAgent && typeof userAgent === 'string') {
    const suspiciousAgents = ['sqlmap', 'nmap', 'nikto', 'dirb', 'gobuster', 'wfuzz'];
    for (const agent of suspiciousAgents) {
      if (userAgent.toLowerCase().includes(agent)) {
        detectedTypes.push({
          type: 'A03_Injection',
          title: OWASP_REFERENCES.attackTypes.A03_Injection.title,
          url: OWASP_REFERENCES.attackTypes.A03_Injection.url,
          description: `檢測到攻擊工具: ${agent}`,
          matchedPattern: agent,
          confidence: 'high'
        });
        break;
      }
    }
  }
  
  return detectedTypes;
};

// 配置驅動的攻擊路徑分類函數
const categorizeAttackPathByConfig = (url) => {
  if (!url) return 'Unknown';
  
  const path = url.toLowerCase();
  
  // 遍歷所有分類配置
  for (const [category, config] of Object.entries(ATTACK_PATH_CATEGORIES)) {
    // 檢查是否符合任何模式
    for (const pattern of config.patterns) {
      if (path.includes(pattern.toLowerCase())) {
        return {
          category: category,
          description: config.description,
          matchedPattern: pattern
        };
      }
    }
  }
  
  return {
    category: 'Other',
    description: '其他類型的攻擊路徑',
    matchedPattern: null
  };
};

// 匯出配置
module.exports = {
  ELK_CONFIG,
  OWASP_REFERENCES,
  identifyOWASPType,
  ATTACK_PATH_CATEGORIES,
  categorizeAttackPathByConfig
}; 