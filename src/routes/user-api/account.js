/**
 * @description 用户账号 account api
 */

const router = require('koa-router')()
const {
  login,
  addUserAccount,
  delUserAccount,
  updateUserAccount,
  searchUserAccount
} = require('../../controller/user/account')

router.prefix('/api/user')

// 用户账号 登录
router.post('/login', async (ctx, next) => {
  const { account, password } = ctx.request.body
  // controller
  ctx.body = await login(account, password)
})

// 用户账号 增
router.post('/addUserAccount', async (ctx, next) => {
  const { account, password, realName, nickName, phone, pic, done } = ctx.request.body
  // controller
  ctx.body = await addUserAccount({ account, password, realName, nickName, phone, pic, done })
})

// 用户账号 删
router.post('/delUserAccount', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserAccount(id)
})

// 用户账号 改
router.post('/updateUserAccount', async (ctx, next) => {
  const { id, account, password, realName, nickName, phone, pic, done } = ctx.request.body
  // controller
  ctx.body = await updateUserAccount({ id, account, password, realName, nickName, phone, pic, done })
})

// 用户账号 模糊查询, 不传数据即 all查询
router.post('/searchUserAccount', async (ctx, next) => {
  const { id, account, password, realName, nickName, phone, pic, done } = ctx.request.body
  // controller
  ctx.body = await searchUserAccount({ id, account, password, realName, nickName, phone, pic, done })
})

module.exports = router