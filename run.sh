#!/bin/bash

# 進入 backend 資料夾，設定環境變數並啟動後端
cd backend || exit 1
export PATH="/Users/peter/.local/bin:$PATH"
node index.js &

# 返回上一層
cd ..

# 進入 frontend 資料夾並啟動前端
cd frontend || exit 1
npm start
