const {
  adminLogin,
  adminAccountList
} = require('../../services/admin/account')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  adminLoginFail,
  adminGetAccountListFail
} = require('../../model/errorInfo')
const {
  adminLoginSuccess,
  adminGetAccountListSuccess
} = require('../../model/successInfo')

/**
 * 登录
 * @param {string} user 账号
 * @param {string} password 密码
 */
async function login(user, password) {
  // service
  const result = await adminLogin(user, password)
  if (result) {
    return new SuccessModel(result, adminLoginSuccess)
  }
  return new ErrorModel(adminLoginFail)
}

/**
 * 获取管理员账号列表
 */
async function accountList() {
  // service
  const result = await adminAccountList()
  if (result) {
    return new SuccessModel(result, adminGetAccountListSuccess)
  }
  return new ErrorModel(adminGetAccountListFail)
}

module.exports = {
  login,
  accountList
}