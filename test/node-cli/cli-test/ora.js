const ora = require('ora')
const processGenFiles = ora('Create project……')
processGenFiles.start() // 进度条开始

setTimeout(() => {
  processGenFiles.succeed(`Create project complete: i18n-b-`)
}, 1000)
