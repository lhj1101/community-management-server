/**
 * @description 管理员 account api
 */

const router = require('koa-router')()
const {
  login,
  addAdminAccount,
  delAdminAccount,
  updateAdminAccount,
  searchAdminAccount
} = require('../../controller/admin/account')

router.prefix('/api/admin')

// 管理员账号 登录
router.post('/login', async (ctx, next) => {
  const { account, password } = ctx.request.body
  // controller
  ctx.body = await login(account, password)
})

// 管理员账号 增
router.post('/addAdminAccount', async (ctx, next) => {
  const { account, password, adminName } = ctx.request.body
  // controller
  ctx.body = await addAdminAccount({ account, password, adminName })
})

// 管理员账号 删
router.post('/delAdminAccount', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delAdminAccount(id)
})

// 管理员账号 改
router.post('/updateAdminAccount', async (ctx, next) => {
  const { id, account, password, adminName } = ctx.request.body
  // controller
  ctx.body = await updateAdminAccount({ id, account, password, adminName })
})

// 管理员账号 模糊查询, 不传数据即 all查询
router.post('/searchAdminAccount', async (ctx, next) => {
  const { id, account, adminName } = ctx.request.body
  // controller
  ctx.body = await searchAdminAccount({ id, account, adminName })
})

module.exports = router