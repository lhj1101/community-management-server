/**
 * @description user API
 */

const router = require('koa-router')()
const { changeInfo } = require('../../controller/user')

router.prefix('/api/user')

// 修改个人信息
router.post('/changeInfo', async (ctx, next) => {
  const { nickName } = ctx.request.body
  // controller
  ctx.body = await changeInfo(nickName)
})

module.exports = router