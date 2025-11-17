// 時間範圍管理配置
module.exports = {
  // 時間範圍策略
  strategies: {
    // 自動模式：適用於資料稀少的情況
    auto: {
      name: '智能自動',
      description: '自動尋找最近的資料，適用於測試環境',
      query: 'match_all',
      maxResults: 1000
    },
    
    // 即時模式：查詢最近1小時
    realtime: {
      name: '即時監控',
      description: '查詢最近1小時的資料',
      timeRange: '1h',
      maxResults: 1000
    },
    
    // 每日模式：查詢最近24小時
    daily: {
      name: '每日分析',
      description: '查詢最近24小時的資料',
      timeRange: '24h',
      maxResults: 5000
    },
    
    // 歷史模式：查詢指定時間範圍
    historical: {
      name: '歷史分析',
      description: '查詢指定的歷史時間範圍',
      customRange: true,
      maxResults: 10000
    }
  },

  // 根據資料情況自動選擇策略
  getOptimalStrategy: (dataAvailability) => {
    if (dataAvailability === 'sparse') {
      return 'auto';  // 資料稀少時使用自動模式
    } else if (dataAvailability === 'realtime') {
      return 'realtime';  // 即時資料使用即時模式
    } else {
      return 'daily';  // 預設使用每日模式
    }
  },

  // 時間範圍解析函數
  parseTimeRange: (range) => {
    const unit = range.slice(-1);
    const value = parseInt(range.slice(0, -1));
    
    const multipliers = {
      'm': 60 * 1000,          // 分鐘
      'h': 60 * 60 * 1000,     // 小時
      'd': 24 * 60 * 60 * 1000 // 天
    };

    return value * (multipliers[unit] || multipliers['h']);
  },

  // 建議的時間範圍選項
  suggestions: [
    { value: '15m', label: '最近 15 分鐘', suitable: '即時監控' },
    { value: '1h', label: '最近 1 小時', suitable: '一般分析' },
    { value: '6h', label: '最近 6 小時', suitable: '趨勢分析' },
    { value: '24h', label: '最近 24 小時', suitable: '每日報告' },
    { value: '7d', label: '最近 7 天', suitable: '週報告' },
    { value: 'auto', label: '智能自動', suitable: '測試環境' }
  ]
}; 