/**
 * @description 用户失物报备 lost api
 */

const router = require('koa-router')()
const {
  addUserLost,
  delUserLost,
  updateUserLost,
  searchUserLost
} = require('../../controller/user/lost')

router.prefix('/api/user')

// 用户失物报备 增
router.post('/addUserLost', async (ctx, next) => {
  const { name, desc, place, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await addUserLost({ name, desc, place, date, done, userId })
})

// 用户失物报备 删
router.post('/delUserLost', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserLost(id)
})

// 用户失物报备 改
router.post('/updateUserLost', async (ctx, next) => {
  const { id, name, desc, place, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await updateUserLost({ id, name, desc, place, date, done, userId })
})

// 用户失物报备 模糊查询, 不传数据即 all查询
router.post('/searchUserLost', async (ctx, next) => {
  const { limitF, limitS, id, name, desc, place, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await searchUserLost({ limitF, limitS, id, name, desc, place, date, done, userId })
})

module.exports = router