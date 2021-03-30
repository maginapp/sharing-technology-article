const router = require('koa-router')()

router
  .get('/gif', async (ctx, next) => {
    ctx.response.body = '<h1>get gif</h1>'
  })

module.exports = router