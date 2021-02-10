/**
 * @description 用户分享 share api
 */

const router = require('koa-router')()
const {
  addUserShare,
  delUserShare,
  updateUserShare,
  searchUserShare
} = require('../../controller/user/share')

router.prefix('/api/user')

// 用户分享 增
router.post('/addUserShare', async (ctx, next) => {
  const { title, desc, content, picture, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await addUserShare({ title, desc, content, picture, date, done, userId })
})

// 用户分享 删
router.post('/delUserShare', async (ctx, next) => {
  const { id } = ctx.request.body
  // controller
  ctx.body = await delUserShare(id)
})

// 用户分享 改
router.post('/updateUserShare', async (ctx, next) => {
  const { id, title, desc, content, picture, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await updateUserShare({ id, title, desc, content, picture, date, done, userId })
})

// 用户分享 模糊查询, 不传数据即 all查询
router.post('/searchUserShare', async (ctx, next) => {
  const { id, title, desc, content, picture, date, done, userId } = ctx.request.body
  // controller
  ctx.body = await searchUserShare({ id, title, desc, content, picture, date, done, userId })
})

module.exports = router