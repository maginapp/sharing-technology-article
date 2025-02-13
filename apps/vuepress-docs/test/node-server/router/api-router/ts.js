const router = require('koa-router')()

router
  .post('/compile', async (ctx, next) => {
    if (!ctx.request.body) ctx.response.body = ''
    // console.log(ctx.req.ip) // undefined
    // console.log(ctx.request.ip) // ::1
    // console.log(ctx.req.connection.remoteAddress) // ::1
    try {
      const result = await compileTs(ctx)
      console.log('response')
      ctx.response.body = result
    } catch(e) {
      ctx.response.body = 'Something Error'
    }
  })

module.exports = router


const compileTs = async (ctx) => {
  const util = require('util')
  const child_process = require('child_process')
  const exec = util.promisify(child_process.exec)

  const path = require('path')
  const fs = require('fs')

  // 生成ts
  const ip = ctx.req.connection.remoteAddress || ctx.req.connection.remoteAddress
  const time = +new Date()
  let fileName = (ip + '_' + time).replace(/[: ]/g, '_')
  const baseName = path.join(__dirname, '../../')
  try {
    fs.statSync(path.join(baseName, 'cache'))
  } catch(e) {
    fs.mkdirSync(path.join(baseName, 'cache'))
  }
  try {
    fs.statSync(path.join(baseName, 'cache/ts'))
  } catch(e) {
    fs.mkdirSync(path.join(baseName, 'cache/ts'))
  }
  let baseFileName = path.join(baseName, 'cache/ts/' + fileName)
  fileName = baseFileName +  '.ts'
  const newFileName = baseFileName +  '.js'
  fs.writeFileSync(fileName, ctx.request.body)
  // 转换js
  let cmdStr = `tsc ${fileName}`
  if (ctx.request.query && ctx.request.query.target) {
    cmdStr += ` --target ${ctx.request.query.target}`
  }
  await exec(cmdStr)
  // 读取js
  const data = fs.readFileSync(newFileName)
  // 删除
  fs.unlinkSync(fileName)
  fs.unlinkSync(newFileName)
  return data
}

