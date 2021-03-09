const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const files = fs.readdirSync(__dirname)
/*
 /^[^\.].*\.js/ 该正则匹配以.js末尾的文件，包括比如： a.js，
 /xx/yy/x.js 类似的多个目录文件，只要以 .js 末尾的即可。
 /^[^\.].*\.js$/.test('a.js'); // true
 /^[^\.].*\.js$/.test('/xx/yy/a.js'); // true
*/
files.filter(file => ~file.search(/^[^\.].*\.js$/)).forEach(file => {
  // 获取文件名 比如 xx.js 这样的，截取 file.substr(0, file.length - 3); 因为 .js 长度为3
  const fileName = file.substr(0, file.length - 3)
  const fileEntity = require(path.join(__dirname, file))
  if (fileName !== 'index') {
    router.use(`/${fileName}`, fileEntity.routes(), fileEntity.allowedMethods())
  }
})

module.exports = router