const {
  userAddUserComplaint,
  userDelUserComplaint,
  userUpdateUserComplaint,
  userSearchUserComplaint
} = require('../../services/user/complaint')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userAddComplaintFail,
  userDelComplaintFail,
  userUpdateComplaintFail,
  userSearchComplaintFail
} = require('../../model/errorInfo')
const {
  userAddComplaintSuccess,
  userDelComplaintSuccess,
  userUpdateComplaintSuccess,
  userSearchComplaintSuccess
} = require('../../model/successInfo')

/**
 * 用户 投诉建议 增加
 * @param {*} direction 投诉建议方向
 * @param {*} desc 投诉建议内容
 * @param {*} done 投诉建议是否已完成
 * @param {*} date 投诉建议日期
 * @param {*} userId 投诉建议人id
 */
async function addUserComplaint({ direction, desc, done, date, userId }) {
  // service
  const result = await userAddUserComplaint({ direction, desc, done, date, userId })
  if (result) {
    return new SuccessModel({ direction, desc, done, date, userId }, userAddComplaintSuccess)
  }
  return new ErrorModel(userAddComplaintFail)
}

/**
 * 用户 投诉建议 根据id删除
 * @param {*} id 投诉建议id
 */
async function delUserComplaint(id){
  const result = await userDelUserComplaint(id)
  if (result) {
    return new SuccessModel({id}, userDelComplaintSuccess)
  }
  return new ErrorModel(userDelComplaintFail)
}

/**
 * 用户 投诉建议 根据id修改，所有必填
 * @param {*} id 用户账号id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
async function updateUserComplaint({ id, direction, desc, done, date, userId }){
  const result = await userUpdateUserComplaint({ id, direction, desc, done, date, userId })
  if (result) {
    return new SuccessModel({ id, direction, desc, done, date, userId }, userUpdateComplaintSuccess)
  }
  return new ErrorModel(userUpdateComplaintFail)
}

/**
 * 用户 投诉建议 模糊查询，不传参就 all查询
 * @param {*} id 用户账号id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
async function searchUserComplaint({ limitF, limitS, id, direction, desc, done, date, userId }) {
  // service
  const result = await userSearchUserComplaint({ limitF, limitS, id, direction, desc, done, date, userId })
  if (result) {
    return new SuccessModel(result, userSearchComplaintSuccess)
  }
  return new ErrorModel(userSearchComplaintFail)
}

module.exports = {
  addUserComplaint,
  delUserComplaint,
  updateUserComplaint,
  searchUserComplaint
}