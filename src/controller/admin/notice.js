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
 * @param {*} title 公告通知标题
 * @param {*} desc 公告通知描述
 * @param {*} content 公告通知内容
 * @param {*} date 公告通知时间
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
 * 管理员 公告通知 更新修改 根据id修改，所有必填
 * @param {*} id 公告通知id
 * @param {*} title 公告通知标题
 * @param {*} desc 公告通知描述
 * @param {*} content 公告通知内容
 * @param {*} date 公告通知时间
 * @param {*} adminId 发布者-管理员id
 */
async function updateNotice({ id, title, desc, content, date, adminId }){
  const result = await adminUpdateNotice({ id, title, desc, content, date, adminId })
  if (result) {
    return new SuccessModel({ id, title, desc, content, date, adminId }, adminUpdateNoticeSuccess)
  }
  return new ErrorModel(adminUpdateNoticeFail)
}

/**
 * 管理员 公告通知 模糊查询, 不传数据即 all查询
 * @param {*} id 公告通知id
 * @param {*} title 公告通知标题
 * @param {*} desc 公告通知描述
 * @param {*} content 公告通知内容
 * @param {*} date 公告通知时间
 * @param {*} adminId 发布者-管理员id
 */
async function searchNotice({ limitF, limitS, id, title, desc, content, date, adminId, adminName }) {
  // service
  const result = await adminSearchNotice({ limitF, limitS, id, title, desc, content, date, adminId, adminName })
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