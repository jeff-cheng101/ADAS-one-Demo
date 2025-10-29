// 安全配置模塊
require('dotenv').config();

const SECURITY_CONFIG = {
  // API Keys (從環境變數讀取)
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: process.env.GEMINI_MODEL || 'gemini-2.5-flash'
  },
  
  // 應用安全
  app: {
    secret: process.env.APP_SECRET || 'default_secret_change_in_production',
    jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret_change_in_production',
    // 純後端模式：允許所有來源。如需限制請通過環境變數 CORS_ORIGINS 設定
    corsOrigins: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['*']
  },
  
  // 速率限制
  rateLimit: {
    windowMs: (parseInt(process.env.RATE_LIMIT_WINDOW) || 15) * 60 * 1000, // 15分鐘
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100 // 每窗口最大請求數
  },
  
  // 驗證配置
  validation: {
    maxTimeRangeHours: 24,
    minTimeRangeMinutes: 1,
    maxRequestSize: '10mb'
  }
};

// 驗證必要的環境變數
function validateSecurityConfig() {
  const requiredVars = ['GEMINI_API_KEY'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.warn('⚠️  警告：缺少重要環境變數:', missing.join(', '));
    console.warn('⚠️  請設置這些變數或應用將使用預設值');
  }
  
  // 檢查預設值使用情況
  if (SECURITY_CONFIG.app.secret === 'default_secret_change_in_production') {
    console.warn('⚠️  警告：使用預設APP_SECRET，生產環境中請更改');
  }
  
  if (SECURITY_CONFIG.app.jwtSecret === 'default_jwt_secret_change_in_production') {
    console.warn('⚠️  警告：使用預設JWT_SECRET，生產環境中請更改');
  }
  
  return SECURITY_CONFIG;
}

// 產生安全的隨機金鑰
function generateSecretKey(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 檢查API Key是否有效格式
function isValidApiKey(apiKey) {
  if (!apiKey || typeof apiKey !== 'string') {
    return false;
  }
  
  // Gemini API Key 通常以 "AI" 開頭且長度大於20
  if (apiKey.startsWith('AI') && apiKey.length > 20) {
    return true;
  }
  
  // 檢查是否為預設占位符
  if (apiKey.includes('your_actual_') || apiKey.includes('your_api_key')) {
    return false;
  }
  
  return apiKey.length > 10;
}

// 清理敏感信息以供日誌使用
function sanitizeForLog(config) {
  const sanitized = JSON.parse(JSON.stringify(config));
  
  if (sanitized.gemini?.apiKey) {
    sanitized.gemini.apiKey = sanitized.gemini.apiKey.substring(0, 6) + '...';
  }
  
  return sanitized;
}

module.exports = {
  SECURITY_CONFIG,
  validateSecurityConfig,
  generateSecretKey,
  isValidApiKey,
  sanitizeForLog
}; 