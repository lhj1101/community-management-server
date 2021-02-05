const { adminLogin } = require('../../services/admin/login')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const { adminLoginFail } = require('../../model/errorInfo')
const { adminLoginSuccess } = require('../../model/successInfo')

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

module.exports = {
  login
}