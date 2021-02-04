/**
 * @description 错误信息
 */

module.exports = {
  adminLoginFail: {
    errno: 10001,
    message: '登录失败，账号或密码错误'
  },
  adminAddActivityFail: {
    errno: 10002,
    message: '添加失败，请确定添加信息完整'
  },
  adminDelActivityFail: {
    errno: 10003,
    message: '删除失败，请确定删除信息id'
  },
  adminUpdateActivityFail: {
    errno: 10004,
    message: '修改失败，请确定修改信息是否完整准确'
  },
  adminSearchActivityFail: {
    errno: 10005,
    message: '查询失败，请确查询信息是否完整准确'
  }
}