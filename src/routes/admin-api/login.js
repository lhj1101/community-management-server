/**
 * @description admin login api
 */

const router = require('koa-router')()
const { login } = require('../../controller/admin/login')

router.prefix('/api/admin')

// 登录
router.post('/adminLogin', async (ctx, next) => {
  const { user, password } = ctx.request.body
  // controller
  ctx.body = await login(user, password)
})

module.exports = router