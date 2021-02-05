/**
 * @description 管理员 活动 api
 */

const router = require('koa-router')()
const {
  searchAllActivity,
  searchActivity,
  addActivity,
  delActivity,
  updateActivity
} = require('../../controller/admin/activity')

router.prefix('/api/admin')

// // 小区活动 all查询
// router.get('/searchAllActivity', async (ctx, next) => {
//   // controller
//   ctx.body = await searchAllActivity()
// })

// 小区活动 模糊查询, 不传数据即 all查询
router.post('/searchActivity', async (ctx, next) => {
  const { id, title, desc, content, place, date, adminId, adminName } = ctx.request.body
  // controller
  ctx.body = await searchActivity({ id, title, desc, content, place, date, adminId, adminName })
})

// 小区活动 增
router.post('/addActivity', async (ctx, next) => {
  const { title, desc, content, place, date, adminId } = ctx.request.body
  // controller
  ctx.body = await addActivity({ title, desc, content, place, date, adminId })
})

// 小区活动 删
router.post('/delActivity', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delActivity(id)
})

// 小区活动 改
router.post('/updateActivity', async (ctx, next) => {
  const { id, title, desc, content, place, date, adminId } = ctx.request.body
  // controller
  ctx.body = await updateActivity({ id, title, desc, content, place, date, adminId })
})

module.exports = router