#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const cacBin = path.join(__dirname, '..', 'cac');

// 确保 cac 可执行
try {
  fs.chmodSync(cacBin, 0o755);
} catch (e) {
  // Windows 或权限不足时忽略
}

console.log(`
  ✅ claude-cac 安装成功

  首次使用：
    cac setup                          初始化
    cac add <名字> <host:port:u:p>     添加代理配置
    cac <名字>                         切换配置
    claude                             启动 Claude Code

  更多信息：https://github.com/nmhjklnm/cac
`);
