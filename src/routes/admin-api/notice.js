/**
 * @description 管理员 notice api
 */

const router = require('koa-router')()
const {
  addNotice,
  delNotice,
  updateNotice,
  searchNotice
} = require('../../controller/admin/notice')

router.prefix('/api/admin')

// 公告通知 增
router.post('/addNotice', async (ctx, next) => {
  const { title, desc, content, date, adminId } = ctx.request.body
  // controller
  ctx.body = await addNotice({ title, desc, content, date, adminId })
})

// 公告通知 删
router.post('/delNotice', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delNotice(id)
})

// 公告通知 改
router.post('/updateNotice', async (ctx, next) => {
  const { id, title, desc, content, date, adminId } = ctx.request.body
  // controller
  ctx.body = await updateNotice({ id, title, desc, content, date, adminId })
})

// 公告通知 模糊查询, 不传数据即 all查询
router.post('/searchNotice', async (ctx, next) => {
  const { id, title, desc, content, date, adminId, adminName } = ctx.request.body
  // controller
  ctx.body = await searchNotice({ id, title, desc, content, date, adminId, adminName })
})


module.exports = router