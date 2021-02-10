/**
 * @description 用户报修 repair api
 */

const router = require('koa-router')()
const {
  addUserRepair,
  delUserRepair,
  updateUserRepair,
  searchUserRepair
} = require('../../controller/user/repair')

router.prefix('/api/user')

// 用户报修 增
router.post('/addUserRepair', async (ctx, next) => {
  const { name, extent, place, done, userId } = ctx.request.body
  // controller
  ctx.body = await addUserRepair({ name, extent, place, done, userId })
})

// 用户报修 删
router.post('/delUserRepair', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserRepair(id)
})

// 用户报修 改
router.post('/updateUserRepair', async (ctx, next) => {
  const { id, name, extent, place, done, userId } = ctx.request.body
  // controller
  ctx.body = await updateUserRepair({ id, name, extent, place, done, userId })
})

// 用户报修 模糊查询, 不传数据即 all查询
router.post('/searchUserRepair', async (ctx, next) => {
  const { id, name, extent, place, done, userId } = ctx.request.body
  // controller
  ctx.body = await searchUserRepair({ id, name, extent, place, done, userId })
})

module.exports = router