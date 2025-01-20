const router = require('koa-router')()

router
  .get('/console', async (ctx, next) => {
    ctx.response.set("Content-Type", "application/json; charset=utf-8")
    const data = {
      url: ctx.url,
      body: ctx.request.body
    }
    console.log(data)
    ctx.response.body = data
  })


module.exports = router

