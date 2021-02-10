const {
  userLogin,
  userAddUserAccount,
  userDelUserAccount,
  userUpdateUserAccount,
  userSearchUserAccount
} = require('../../services/user/account')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userLoginFail,
  userAddAccountFail,
  userDelAccountFail,
  userUpdateAccountFail,
  userSearchAccountFail
} = require('../../model/errorInfo')
const {
  userLoginSuccess,
  userAddAccountSuccess,
  userDelAccountSuccess,
  userUpdateAccountSuccess,
  userSearchAccountSuccess
} = require('../../model/successInfo')

/**
 * 用户账号 登录
 * @param {string} account 账号
 * @param {string} password 密码
 */
async function login(account, password) {
  // service
  const result = await userLogin(account, password)
  if (result) {
    return new SuccessModel(result, userLoginSuccess)
  }
  return new ErrorModel(userLoginFail)
}

/**
 * 用户账号 增加
 * @param {*} account 用户账号
 * @param {*} password 用户密码
 * @param {*} realName 用户真名
 * @param {*} nickName 用户昵称
 * @param {*} phone 用户联系电话
 * @param {*} pic 用户头像
 */
async function addUserAccount({ account, password, realName, nickName, phone, pic, done }) {
  // service
  const result = await userAddUserAccount({ account, password, realName, nickName, phone, pic, done })
  if (result) {
    return new SuccessModel({ account, password, realName, nickName, phone, pic, done }, userAddAccountSuccess)
  }
  return new ErrorModel(userAddAccountFail)
}

/**
 * 用户账号 根据id删除
 * @param {*} id 用户账号id
 */
async function delUserAccount(id){
  const result = await userDelUserAccount(id)
  if (result) {
    return new SuccessModel({id}, userDelAccountSuccess)
  }
  return new ErrorModel(userDelAccountFail)
}

/**
 * 用户账号 根据id修改，所有必填
 * @param {*} id 用户账号id
 * @param {*} account 用户账号
 * @param {*} password 用户密码
 * @param {*} realName 用户真名
 * @param {*} nickName 用户昵称
 * @param {*} phone 用户联系电话
 * @param {*} pic 用户头像
 */
async function updateUserAccount({ id, account, password, realName, nickName, phone, pic, done }){
  const result = await userUpdateUserAccount({ id, account, password, realName, nickName, phone, pic, done })
  if (result) {
    return new SuccessModel({ id, account, password, realName, nickName, phone, pic, done }, userUpdateAccountSuccess)
  }
  return new ErrorModel(userUpdateAccountFail)
}

/**
 * 用户账号 模糊查询，不传参就 all查询
 * @param {*} id 用户账号id
 * @param {*} account 用户账号
 * @param {*} password 用户密码
 * @param {*} realName 用户真名
 * @param {*} nickName 用户昵称
 * @param {*} phone 用户联系电话
 * @param {*} pic 用户头像
 */
async function searchUserAccount({ id, account, password, realName, nickName, phone, pic, done }) {
  // service
  const result = await userSearchUserAccount({ id, account, password, realName, nickName, phone, pic, done })
  if (result) {
    return new SuccessModel(result, userSearchAccountSuccess)
  }
  return new ErrorModel(userSearchAccountFail)
}

module.exports = {
  login,
  addUserAccount,
  delUserAccount,
  updateUserAccount,
  searchUserAccount
}