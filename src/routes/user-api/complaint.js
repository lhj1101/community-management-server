/**
 * @description 用户投诉建议 complaint api
 */

const router = require('koa-router')()
const {
  addUserComplaint,
  delUserComplaint,
  updateUserComplaint,
  searchUserComplaint
} = require('../../controller/user/complaint')

router.prefix('/api/user')

// 用户投诉建议 增
router.post('/addUserComplaint', async (ctx, next) => {
  const { direction, desc, done, date, userId } = ctx.request.body
  // controller
  ctx.body = await addUserComplaint({ direction, desc, done, date, userId })
})

// 用户投诉建议 删
router.post('/delUserComplaint', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserComplaint(id)
})

// 用户投诉建议 改
router.post('/updateUserComplaint', async (ctx, next) => {
  const { id, direction, desc, done, date, userId } = ctx.request.body
  // controller
  ctx.body = await updateUserComplaint({ id, direction, desc, done, date, userId })
})

// 用户投诉建议 模糊查询, 不传数据即 all查询
router.post('/searchUserComplaint', async (ctx, next) => {
  const { id, direction, desc, done, date, userId } = ctx.request.body
  // controller
  ctx.body = await searchUserComplaint({ id, direction, desc, done, date, userId })
})

module.exports = router