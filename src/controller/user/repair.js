const {
  userAddUserRepair,
  userDelUserRepair,
  userUpdateUserRepair,
  userSearchUserRepair
} = require('../../services/user/repair')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userAddRepairFail,
  userDelRepairFail,
  userUpdateRepairFail,
  userSearchRepairFail
} = require('../../model/errorInfo')
const {
  userAddRepairSuccess,
  userDelRepairSuccess,
  userUpdateRepairSuccess,
  userSearchRepairSuccess
} = require('../../model/successInfo')

/**
 * 用户 报修 增加
 * @param {*} name 报修物品
 * @param {*} extent 损坏程度
 * @param {*} place 损坏地点
 * @param {*} done 是否已经修复完成
 * @param {*} userId 报修人id
 */
async function addUserRepair({ name, extent, place, done, userId }) {
  // service
  const result = await userAddUserRepair({ name, extent, place, done, userId })
  if (result) {
    return new SuccessModel({ name, extent, place, done, userId }, userAddRepairSuccess)
  }
  return new ErrorModel(userAddRepairFail)
}

/**
 * 用户 报修 根据id删除
 * @param {*} id 报修id
 */
async function delUserRepair(id){
  const result = await userDelUserRepair(id)
  if (result) {
    return new SuccessModel({id}, userDelRepairSuccess)
  }
  return new ErrorModel(userDelRepairFail)
}

/**
 * 用户 报修 根据id修改，所有必填
 * @param {*} id 报修id
 * @param {*} name 报修物品
 * @param {*} extent 损坏程度
 * @param {*} place 损坏地点
 * @param {*} done 是否已经修复完成
 * @param {*} userId 报修人id
 */
async function updateUserRepair({ id, name, extent, place, done, userId }){
  const result = await userUpdateUserRepair({ id, name, extent, place, done, userId })
  if (result) {
    return new SuccessModel({ id, name, extent, place, done, userId }, userUpdateRepairSuccess)
  }
  return new ErrorModel(userUpdateRepairFail)
}

/**
 * 用户 报修 模糊查询，不传参就 all查询
 * @param {*} id 报修id
 * @param {*} name 报修物品
 * @param {*} extent 损坏程度
 * @param {*} place 损坏地点
 * @param {*} done 是否已经修复完成
 * @param {*} userId 报修人id
 */
async function searchUserRepair({ limitF, limitS, id, name, extent, place, done, userId }) {
  // service
  const result = await userSearchUserRepair({ limitF, limitS, id, name, extent, place, done, userId })
  if (result) {
    return new SuccessModel(result, userSearchRepairSuccess)
  }
  return new ErrorModel(userSearchRepairFail)
}

module.exports = {
  addUserRepair,
  delUserRepair,
  updateUserRepair,
  searchUserRepair
}