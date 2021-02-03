const { loginUser } = require('../../services/back/login')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const { loginFail } = require('../../model/errorInfo')

/**
 * 登录
 * @param {string} user 账号
 * @param {string} password 密码
 */
async function login(user, password) {
  // service
  const result = await loginUser(user, password)
  if (result) {
    return new SuccessModel(result)
  }
  return new ErrorModel(loginFail)
}

module.exports = {
  login
}