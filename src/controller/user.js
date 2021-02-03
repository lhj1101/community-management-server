const { updateUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

/**
 * 修改个人信息
 * @param {Object} ctx ctx
 * @param {string} nickName 昵称
 * @param {string} city 城市
 * @param {string} picture 头像
 */
async function changeInfo(nickName) {
  // service
  const result = await updateUser(nickName)
  if (result) {
    return new SuccessModel(result)
  }
  return new ErrorModel({errno: 11001,message: '删除微博失败，请重试'})
}

module.exports = {
  changeInfo
}