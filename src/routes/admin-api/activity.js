/**
 * @description 管理员 活动 api
 */

const router = require('koa-router')()
const {
  addActivity,
  delActivity,
  updateActivity,
  searchActivity
} = require('../../controller/admin/activity')

router.prefix('/api/admin')

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

// 小区活动 模糊查询, 不传数据即 all查询
router.post('/searchActivity', async (ctx, next) => {
  const { limitF, limitS, id, title, desc, content, place, date, adminId, adminName } = ctx.request.body
  // controller
  ctx.body = await searchActivity({ limitF, limitS, id, title, desc, content, place, date, adminId, adminName })
})

module.exports = router