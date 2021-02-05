/**
 * @description 管理员 account api
 */

const router = require('koa-router')()
const {
  login,
  accountList
} = require('../../controller/admin/account')

router.prefix('/api/admin')

// 登录
router.post('/login', async (ctx, next) => {
  const { user, password } = ctx.request.body
  // controller
  ctx.body = await login(user, password)
})

// 账号列表
router.get('/accountList', async (ctx, next) => {
  // controller
  ctx.body = await accountList()
})

module.exports = router