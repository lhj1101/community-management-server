const {
  userAddUserLost,
  userDelUserLost,
  userUpdateUserLost,
  userSearchUserLost
} = require('../../services/user/lost')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userAddLostFail,
  userDelLostFail,
  userUpdateLostFail,
  userSearchLostFail
} = require('../../model/errorInfo')
const {
  userAddLostSuccess,
  userDelLostSuccess,
  userUpdateLostSuccess,
  userSearchLostSuccess
} = require('../../model/successInfo')

/**
 * 用户 失物报备 增加
 * @param {*} name 失物名
 * @param {*} desc 失物内容
 * @param {*} place 失物地点
 * @param {*} date 失物日期
 * @param {*} done 失物是否已找回
 * @param {*} userId 失物人id
 */
async function addUserLost({ name, desc, place, date, done, userId }) {
  // service
  const result = await userAddUserLost({ name, desc, place, date, done, userId })
  if (result) {
    return new SuccessModel({ name, desc, place, date, done, userId }, userAddLostSuccess)
  }
  return new ErrorModel(userAddLostFail)
}

/**
 * 用户 失物报备 根据id删除
 * @param {*} id 失物报备id
 */
async function delUserLost(id){
  const result = await userDelUserLost(id)
  if (result) {
    return new SuccessModel({id}, userDelLostSuccess)
  }
  return new ErrorModel(userDelLostFail)
}

/**
 * 用户 失物报备 根据id修改，所有必填
 * @param {*} id 失物报备id
 * @param {*} name 失物名
 * @param {*} desc 失物内容
 * @param {*} place 失物地点
 * @param {*} date 失物日期
 * @param {*} done 失物是否已找回
 * @param {*} userId 失物人id
 */
async function updateUserLost({ id, name, desc, place, date, done, userId }){
  const result = await userUpdateUserLost({ id, name, desc, place, date, done, userId })
  if (result) {
    return new SuccessModel({ id, name, desc, place, date, done, userId }, userUpdateLostSuccess)
  }
  return new ErrorModel(userUpdateLostFail)
}

/**
 * 用户 失物报备 模糊查询，不传参就 all查询
 * @param {*} id 失物报备id
 * @param {*} name 失物名
 * @param {*} desc 失物内容
 * @param {*} place 失物地点
 * @param {*} date 失物日期
 * @param {*} done 失物是否已找回
 * @param {*} userId 失物人id
 */
async function searchUserLost({ limitF, limitS, id, name, desc, place, date, done, userId }) {
  // service
  const result = await userSearchUserLost({ limitF, limitS, id, name, desc, place, date, done, userId })
  if (result) {
    return new SuccessModel(result, userSearchLostSuccess)
  }
  return new ErrorModel(userSearchLostFail)
}

module.exports = {
  addUserLost,
  delUserLost,
  updateUserLost,
  searchUserLost
}