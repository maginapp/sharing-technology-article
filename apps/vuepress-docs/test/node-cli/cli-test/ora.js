const ora = require('ora')
// 创建进度条
const processGenFiles = ora('Create project……')
 // 进度条开始
processGenFiles.start()

setTimeout(() => {
  // 完成操作
  processGenFiles.succeed(`Create project complete: i18n-b-`)
}, 1000)
