/**
 * @description 住户 house holder api
 */

const router = require('koa-router')()
const {
  addHolder,
  delHolder,
  updateHolder,
  searchHolder
} = require('../../controller/house-holder/holder')

router.prefix('/api/houseHolder')


// 住户 增
router.post('/addHolder', async (ctx, next) => {
  const { user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber } = ctx.request.body
  // controller
  ctx.body = await addHolder({ user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber })
})

// 住户 删
router.post('/delHolder', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delHolder(id)
})

// 住户 改
router.post('/updateHolder', async (ctx, next) => {
  const { id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber } = ctx.request.body
  // controller
  ctx.body = await updateHolder({ id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber })
})

// 住户 模糊查询, 不传数据即 all查询
router.post('/searchHolder', async (ctx, next) => {
  const { limitF, limitS, id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber } = ctx.request.body
  // controller
  ctx.body = await searchHolder({ limitF, limitS, id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber })
})

module.exports = router