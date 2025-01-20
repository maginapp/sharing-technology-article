const router = require('koa-router')()
const fileRouter = require('./api-router')
router.use(fileRouter.routes())
module.exports = router