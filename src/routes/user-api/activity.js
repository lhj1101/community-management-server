/**
 * @description 用户活动 activity api
 */

const router = require('koa-router')()
const {
  addUserActivity,
  delUserActivity,
  updateUserActivity,
  searchUserActivity
} = require('../../controller/user/activity')

router.prefix('/api/user')

// 用户账号 增
router.post('/addUserActivity', async (ctx, next) => {
  const { title, content, place, date, userId } = ctx.request.body
  // controller
  ctx.body = await addUserActivity({ title, content, place, date, userId })
})

// 用户账号 删
router.post('/delUserActivity', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserActivity(id)
})

// 用户账号 改
router.post('/updateUserActivity', async (ctx, next) => {
  const { id, title, content, place, date, userId } = ctx.request.body
  // controller
  ctx.body = await updateUserActivity({ id, title, content, place, date, userId })
})

// 用户账号 模糊查询, 不传数据即 all查询
router.post('/searchUserActivity', async (ctx, next) => {
  const { limitF, limitS, id, title, content, place, date, userId } = ctx.request.body
  // controller
  ctx.body = await searchUserActivity({ limitF, limitS, id, title, content, place, date, userId })
})

module.exports = router