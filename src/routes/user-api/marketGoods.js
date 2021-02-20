/**
 * @description 二手商品 marketGoods api
 */

const router = require('koa-router')()
const {
  addUserMarketGoods,
  delUserMarketGoods,
  updateUserMarketGoods,
  searchUserMarketGoods
} = require('../../controller/user/marketGoods')

router.prefix('/api/user')

// 用户二手商品 增
router.post('/addUserMarketGoods', async (ctx, next) => {
  const { type, title, desc, number, price, picture, done, userId } = ctx.request.body
  // controller
  ctx.body = await addUserMarketGoods({ type, title, desc, number, price, picture, done, userId })
})

// 用户二手商品 删
router.post('/delUserMarketGoods', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserMarketGoods(id)
})

// 用户二手商品 改
router.post('/updateUserMarketGoods', async (ctx, next) => {
  const { id, type, title, desc, number, price, picture, done, userId } = ctx.request.body
  // controller
  ctx.body = await updateUserMarketGoods({ id, type, title, desc, number, price, picture, done, userId })
})

// 用户二手商品 模糊查询, 不传数据即 all查询
router.post('/searchUserMarketGoods', async (ctx, next) => {
  const { limitF, limitS, id, type, title, desc, number, price, picture, done, userId } = ctx.request.body
  // controller
  ctx.body = await searchUserMarketGoods({ limitF, limitS, id, type, title, desc, number, price, picture, done, userId })
})

module.exports = router