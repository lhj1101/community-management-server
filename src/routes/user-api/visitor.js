/**
 * @description 用户访客 visitor api
 */

const router = require('koa-router')()
const {
  addUserVisitor,
  delUserVisitor,
  updateUserVisitor,
  searchUserVisitor
} = require('../../controller/user/visitor')

router.prefix('/api/user')

// 用户访客 增
router.post('/addUserVisitor', async (ctx, next) => {
  const { name, sex, phone, stayTime, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await addUserVisitor({ name, sex, phone, stayTime, date, done, userId })
})

// 用户访客 删
router.post('/delUserVisitor', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserVisitor(id)
})

// 用户访客 改
router.post('/updateUserVisitor', async (ctx, next) => {
  const { id, name, sex, phone, stayTime, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await updateUserVisitor({ id, name, sex, phone, stayTime, date, done, userId })
})

// 用户访客 模糊查询, 不传数据即 all查询
router.post('/searchUserVisitor', async (ctx, next) => {
  const { id, name, sex, phone, stayTime, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await searchUserVisitor({ id, name, sex, phone, stayTime, date, done, userId })
})

module.exports = router