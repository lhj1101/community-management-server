/**
 * @description 错误信息
 */

module.exports = {
  // admin account
  adminLoginFail: {
    errno: 11001,
    message: '管理员登录失败，账号或密码错误'
  },
  adminAddAccountFail: {
    errno: 11002,
    message: '管理员列表，添加失败'
  },
  adminDelAccountFail: {
    errno: 11003,
    message: '管理员列表，删除失败'
  },
  adminUpdateAccountFail: {
    errno: 11004,
    message: '管理员列表，更新失败'
  },
  adminSearchAccountFail: {
    errno: 11005,
    message: '管理员列表，查询失败'
  },
  // admin activity
  adminAddActivityFail: {
    errno: 12001,
    message: '活动添加失败，请确定添加信息完整'
  },
  adminDelActivityFail: {
    errno: 12002,
    message: '活动删除失败，请确定删除信息id'
  },
  adminUpdateActivityFail: {
    errno: 12003,
    message: '活动更新失败，请确定修改信息是否完整准确'
  },
  adminSearchActivityFail: {
    errno: 12004,
    message: '活动查询失败，请确查询信息是否完整准确'
  },
  // admin notice
  adminAddNoticeFail: {
    errno: 13001,
    message: '公告添加失败，请确定添加信息完整'
  },
  adminDelNoticeFail: {
    errno: 13002,
    message: '公告删除失败，请确定删除信息id'
  },
  adminUpdateNoticeFail: {
    errno: 13003,
    message: '公告更新失败，请确定修改信息是否完整准确'
  },
  adminSearchNoticeFail: {
    errno: 13004,
    message: '公告查询失败，请确查询信息是否完整准确'
  }
}