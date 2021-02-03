/**
 * @description login API
 */

const router = require('koa-router')()
const { login } = require('../../controller/back/user')

router.prefix('/api/back')

// 登录
router.post('/login', async (ctx, next) => {
  const { user, password } = ctx.request.body
  // controller
  ctx.body = await login(user, password)
})

module.exports = router