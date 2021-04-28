const {
  userAddUserShare,
  userDelUserShare,
  userUpdateUserShare,
  userSearchUserShare
} = require('../../services/user/share')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userAddShareFail,
  userDelShareFail,
  userUpdateShareFail,
  userSearchShareFail
} = require('../../model/errorInfo')
const {
  userAddShareSuccess,
  userDelShareSuccess,
  userUpdateShareSuccess,
  userSearchShareSuccess
} = require('../../model/successInfo')

/**
 * 用户 分享 增加
 * @param {*} title 分享标题
 * @param {*} desc 分享描述
 * @param {*} content 分享内容
 * @param {*} picture 分享图片
 * @param {*} date 分享日期
 * @param {*} done 分享是否已删除
 * @param {*} userId 分享人id
 */
async function addUserShare({ title, desc, content, picture, date, done, userId, userPic }) {
  // service
  const result = await userAddUserShare({ title, desc, content, picture, date, done, userId, userPic })
  if (result) {
    return new SuccessModel({ title, desc, content, picture, date, done, userId, userPic }, userAddShareSuccess)
  }
  return new ErrorModel(userAddShareFail)
}

/**
 * 用户 分享 根据id删除
 * @param {*} id 分享id
 */
async function delUserShare(id){
  const result = await userDelUserShare(id)
  if (result) {
    return new SuccessModel({id}, userDelShareSuccess)
  }
  return new ErrorModel(userDelShareFail)
}

/**
 * 用户 分享 根据id修改，所有必填
 * @param {*} id 分享id
 * @param {*} title 分享标题
 * @param {*} desc 分享描述
 * @param {*} content 分享内容
 * @param {*} picture 分享图片
 * @param {*} date 分享日期
 * @param {*} done 分享是否已删除
 * @param {*} userId 分享人id
 */
async function updateUserShare({ id, title, desc, content, picture, date, done, userId }){
  const result = await userUpdateUserShare({ id, title, desc, content, picture, date, done, userId })
  if (result) {
    return new SuccessModel({ id, title, desc, content, picture, date, done, userId }, userUpdateShareSuccess)
  }
  return new ErrorModel(userUpdateShareFail)
}

/**
 * 用户 分享 模糊查询，不传参就 all查询
 * @param {*} id 分享id
 * @param {*} title 分享标题
 * @param {*} desc 分享描述
 * @param {*} content 分享内容
 * @param {*} picture 分享图片
 * @param {*} date 分享日期
 * @param {*} done 分享是否已删除
 * @param {*} userId 分享人id
 */
async function searchUserShare({ limitF, limitS, id, title, desc, content, picture, date, done, userId, userPic }) {
  // service
  const result = await userSearchUserShare({ limitF, limitS, id, title, desc, content, picture, date, done, userId, userPic })
  if (result) {
    return new SuccessModel(result, userSearchShareSuccess)
  }
  return new ErrorModel(userSearchShareFail)
}

module.exports = {
  addUserShare,
  delUserShare,
  updateUserShare,
  searchUserShare
}