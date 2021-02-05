/**
 * @description 错误信息
 */

module.exports = {
  // admin account
  adminLoginFail: {
    errno: 11001,
    message: '管理员登录失败，账号或密码错误'
  },
  adminGetAccountListFail: {
    errno: 11002,
    message: '获取管理员列表失败'
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
    message: '活动修改失败，请确定修改信息是否完整准确'
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
    message: '公告修改失败，请确定修改信息是否完整准确'
  },
  adminSearchNoticeFail: {
    errno: 13004,
    message: '公告查询失败，请确查询信息是否完整准确'
  }
}