const {
  userAddUserVisitor,
  userDelUserVisitor,
  userUpdateUserVisitor,
  userSearchUserVisitor
} = require('../../services/user/visitor')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userAddVisitorFail,
  userDelVisitorFail,
  userUpdateVisitorFail,
  userSearchVisitorFail
} = require('../../model/errorInfo')
const {
  userAddVisitorSuccess,
  userDelVisitorSuccess,
  userUpdateVisitorSuccess,
  userSearchVisitorSuccess
} = require('../../model/successInfo')

/**
 * 用户 访客 增加
 * @param {*} name 访客名
 * @param {*} sex 访客性别
 * @param {*} phone 访客联系电话
 * @param {*} stayTime 访客是否过夜
 * @param {*} date 访客日期
 * @param {*} done 访客是否已经离开
 * @param {*} userId 被访人id
 */
async function addUserVisitor({ name, sex, phone, stayTime, date, done, userId }) {
  // service
  const result = await userAddUserVisitor({ name, sex, phone, stayTime, date, done, userId })
  if (result) {
    return new SuccessModel({ name, sex, phone, stayTime, date, done, userId }, userAddVisitorSuccess)
  }
  return new ErrorModel(userAddVisitorFail)
}

/**
 * 用户 访客 根据id删除
 * @param {*} id 访客id
 */
async function delUserVisitor(id){
  const result = await userDelUserVisitor(id)
  if (result) {
    return new SuccessModel({id}, userDelVisitorSuccess)
  }
  return new ErrorModel(userDelVisitorFail)
}

/**
 * 用户 访客 根据id修改，所有必填
 * @param {*} id 访客id
 * @param {*} name 访客名
 * @param {*} sex 访客性别
 * @param {*} phone 访客联系电话
 * @param {*} stayTime 访客是否过夜
 * @param {*} date 访客日期
 * @param {*} done 访客是否已经离开
 * @param {*} userId 被访人id
 */
async function updateUserVisitor({ id, name, sex, phone, stayTime, date, done, userId }){
  const result = await userUpdateUserVisitor({ id, name, sex, phone, stayTime, date, done, userId })
  if (result) {
    return new SuccessModel({ id, name, sex, phone, stayTime, date, done, userId }, userUpdateVisitorSuccess)
  }
  return new ErrorModel(userUpdateVisitorFail)
}

/**
 * 用户 访客 模糊查询，不传参就 all查询
 * @param {*} id 访客id
 * @param {*} name 访客名
 * @param {*} sex 访客性别
 * @param {*} phone 访客联系电话
 * @param {*} stayTime 访客是否过夜
 * @param {*} date 访客日期
 * @param {*} done 访客是否已经离开
 * @param {*} userId 被访人id
 */
async function searchUserVisitor({ id, name, sex, phone, stayTime, date, done, userId }) {
  // service
  const result = await userSearchUserVisitor({ id, name, sex, phone, stayTime, date, done, userId })
  if (result) {
    return new SuccessModel(result, userSearchVisitorSuccess)
  }
  return new ErrorModel(userSearchVisitorFail)
}

module.exports = {
  addUserVisitor,
  delUserVisitor,
  updateUserVisitor,
  searchUserVisitor
}