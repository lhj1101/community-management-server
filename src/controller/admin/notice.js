const {
  adminAddNotice,
  adminDelNotice,
  adminUpdateNotice,
  adminSearchNotice
} = require('../../services/admin/notice')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  adminAddNoticeFail,
  adminDelNoticeFail,
  adminUpdateNoticeFail,
  adminSearchNoticeFail
} = require('../../model/errorInfo')
const {
  adminAddNoticeSuccess,
  adminDelNoticeSuccess,
  adminUpdateNoticeSuccess,
  adminSearchNoticeSuccess
} = require('../../model/successInfo')

/**
 * 管理员 公告通知 增加
 * @param {*} title 活动标题
 * @param {*} desc 活动描述
 * @param {*} content 活动内容
 * @param {*} date 活动时间
 * @param {*} adminId 发布者-管理员id
 */
async function addNotice({ title, desc, content, date, adminId }) {
  // service
  const result = await adminAddNotice({ title, desc, content, date, adminId })
  if (result) {
    return new SuccessModel({ title, desc, content, date, adminId }, adminAddNoticeSuccess)
  }
  return new ErrorModel(adminAddNoticeFail)
}

/**
 * 管理员 公告通知 根据id删除
 * @param {*} id 公告通知id
 */
async function delNotice(id){
  const result = await adminDelNotice(id)
  if (result) {
    return new SuccessModel({id}, adminDelNoticeSuccess)
  }
  return new ErrorModel(adminDelNoticeFail)
}

/**
 * 管理员 公告通知 根据id修改
 * @param {*} id 
 * @param {*} title 
 * @param {*} desc 
 * @param {*} content 
 * @param {*} date 
 * @param {*} adminId 
 */
async function updateNotice({ id, title, desc, content, date, adminId }){
  const result = await adminUpdateNotice({ id, title, desc, content, date, adminId })
  if (result) {
    return new SuccessModel({ id, title, desc, content, date, adminId }, adminUpdateNoticeSuccess)
  }
  return new ErrorModel(adminUpdateNoticeFail)
}

/**
 * 管理员 活动 模糊查询, 不传数据即 all查询
 * @param {*} id 活动id
 * @param {*} title 活动标题
 * @param {*} desc 活动描述
 * @param {*} content 活动内容
 * @param {*} date 活动时间
 * @param {*} adminId 发布者-管理员id
 */
async function searchNotice({ id, title, desc, content, date, adminId, adminName }) {
  // service
  const result = await adminSearchNotice({ id, title, desc, content, date, adminId, adminName })
  if (result) {
    return new SuccessModel(result, adminSearchNoticeSuccess)
  }
  return new ErrorModel(adminSearchNoticeFail)
}

module.exports = {
  addNotice,
  delNotice,
  updateNotice,
  searchNotice
}