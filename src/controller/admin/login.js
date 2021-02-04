const { loginAdmin } = require('../../services/admin/login')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const { adminLoginFail } = require('../../model/errorInfo')

/**
 * 登录
 * @param {string} user 账号
 * @param {string} password 密码
 */
async function login(user, password) {
  // service
  const result = await loginAdmin(user, password)
  if (result) {
    return new SuccessModel(result)
  }
  return new ErrorModel(adminLoginFail)
}

module.exports = {
  login
}