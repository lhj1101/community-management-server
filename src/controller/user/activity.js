const {
  userAddUserActivity,
  userDelUserActivity,
  userUpdateUserActivity,
  userSearchUserActivity
} = require('../../services/user/activity')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userAddActivityFail,
  userDelActivityFail,
  userUpdateActivityFail,
  userSearchActivityFail
} = require('../../model/errorInfo')
const {
  userAddActivitySuccess,
  userDelActivitySuccess,
  userUpdateActivitySuccess,
  userSearchActivitySuccess
} = require('../../model/successInfo')

/**
 * 用户 组织活动 增加
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
async function addUserActivity({ title, content, place, date, userId }) {
  // service
  const result = await userAddUserActivity({ title, content, place, date, userId })
  if (result) {
    return new SuccessModel({ title, content, place, date, userId }, userAddActivitySuccess)
  }
  return new ErrorModel(userAddActivityFail)
}

/**
 * 用户 组织活动 根据id删除
 * @param {*} id 组织活动id
 */
async function delUserActivity(id){
  const result = await userDelUserActivity(id)
  if (result) {
    return new SuccessModel({id}, userDelActivitySuccess)
  }
  return new ErrorModel(userDelActivityFail)
}

/**
 * 用户 组织活动 根据id修改，所有必填
 * @param {*} id 组织活动id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
async function updateUserActivity({ id, title, content, place, date, userId }){
  const result = await userUpdateUserActivity({ id, title, content, place, date, userId })
  if (result) {
    return new SuccessModel({ id, title, content, place, date, userId }, userUpdateActivitySuccess)
  }
  return new ErrorModel(userUpdateActivityFail)
}

/**
 * 用户 组织活动 模糊查询，不传参就 all查询
 * @param {*} id 组织活动id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
async function searchUserActivity({ limitF, limitS, id, title, content, place, date, userId }) {
  // service
  const result = await userSearchUserActivity({ limitF, limitS, id, title, content, place, date, userId })
  if (result) {
    return new SuccessModel(result, userSearchActivitySuccess)
  }
  return new ErrorModel(userSearchActivityFail)
}

module.exports = {
  addUserActivity,
  delUserActivity,
  updateUserActivity,
  searchUserActivity
}