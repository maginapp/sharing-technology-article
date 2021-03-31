const router = require('koa-router')()

const controller = require('./../controller/gif')

router
  .get('/gif', async (ctx, next) => {
    ctx.response.body = '<h1>get gif</h1>'
  })
  .post('/create', controller.create)
  .post('/create-vue', controller.createVue)

module.exports = router