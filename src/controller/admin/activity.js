const {
  adminAddActivity,
  adminDelActivity,
  adminUpdateActivity,
  adminSearchActivity
} = require('../../services/admin/activity')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  adminAddActivityFail,
  adminDelActivityFail,
  adminUpdateActivityFail,
  adminSearchActivityFail
} = require('../../model/errorInfo')
const {
  adminAddActivitySuccess,
  adminDelActivitySuccess,
  adminUpdateActivitySuccess,
  adminSearchActivitySuccess
} = require('../../model/successInfo')

/**
 * 管理员 活动 增加
 * @param {*} title 活动标题
 * @param {*} desc 活动描述
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动时间
 * @param {*} adminId 发布者-管理员id
 */
async function addActivity({ title, desc, content, place, date, adminId }) {
  // service
  const result = await adminAddActivity({ title, desc, content, place, date, adminId })
  if (result) {
    return new SuccessModel({ title, desc, content, place, date, adminId }, adminAddActivitySuccess)
  }
  return new ErrorModel(adminAddActivityFail)
}

/**
 * 管理员 活动 根据id删除
 * @param {*} id 活动id
 */
async function delActivity(id){
  const result = await adminDelActivity(id)
  if (result) {
    return new SuccessModel({id}, adminDelActivitySuccess)
  }
  return new ErrorModel(adminDelActivityFail)
}

/**
 * 管理员 活动 更新修改，所有必填
 * @param {*} id 活动id
 * @param {*} title 活动标题
 * @param {*} desc 活动描述
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动时间
 * @param {*} adminId 发布者-管理员id
 */
async function updateActivity({ id, title, desc, content, place, date, adminId }){
  const result = await adminUpdateActivity({ id, title, desc, content, place, date, adminId })
  if (result) {
    return new SuccessModel({ id, title, desc, content, place, date, adminId }, adminUpdateActivitySuccess)
  }
  return new ErrorModel(adminUpdateActivityFail)
}

/**
 * 管理员 活动 模糊查询, 不传数据即 all查询
 * @param {*} id 活动id
 * @param {*} title 活动标题
 * @param {*} desc 活动描述
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动时间
 * @param {*} adminId 发布者-管理员id
 */
async function searchActivity({ limitF, limitS, id, title, desc, content, place, date, adminId, adminName }) {
  // service
  const result = await adminSearchActivity({ limitF, limitS, id, title, desc, content, place, date, adminId, adminName })
  if (result) {
    return new SuccessModel(result, adminSearchActivitySuccess)
  }
  return new ErrorModel(adminSearchActivityFail)
}

module.exports = {
  addActivity,
  delActivity,
  updateActivity,
  searchActivity
}