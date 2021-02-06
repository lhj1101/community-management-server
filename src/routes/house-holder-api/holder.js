/**
 * @description 住户 house holder api
 */

const router = require('koa-router')()
const {
} = require('../../controller/house-holder/holder')

router.prefix('/api/houseHolder')


// 住户 增
router.post('/addAdminaccount', async (ctx, next) => {
  const { account, password, adminName } = ctx.request.body
  // controller
  ctx.body = await addAdminaccount({ account, password, adminName })
})

// 住户 删
router.post('/delAdminaccount', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delAdminaccount(id)
})

// 住户 改
router.post('/updateAdminaccount', async (ctx, next) => {
  const { id, account, password, adminName } = ctx.request.body
  // controller
  ctx.body = await updateAdminaccount({ id, account, password, adminName })
})

// 住户 模糊查询, 不传数据即 all查询
router.post('/searchAdminaccount', async (ctx, next) => {
  const { id, account, adminName } = ctx.request.body
  // controller
  ctx.body = await searchAdminaccount({ id, account, adminName })
})

module.exports = router