const { exec } = require('../../db/mysql')

/**
 * 管理员 活动 增加
 * @param {*} title 活动标题
 * @param {*} desc 活动描述
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动时间
 * @param {*} adminId 发布者-管理员id
 */
const adminAddActivity = ({ title, desc, content, place, date, adminId }) => {
  // console.log(!title || !desc || !content || !place || !date || !adminId)
  if(!title || !desc || !content || !place || !date || !adminId){
    return false
  }
  let sql = `insert into admin_activity (
    activity_title,
    activity_desc,
    activity_content,
    activity_place,
    activity_date,
    activity_adminId
  ) values (
    '${title}',
    '${desc}',
    '${content}',
    '${place}',
    '${date}',
    '${adminId}'
  )`
  // 返回promise  
  console.log(sql)
  let isSuccess = exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(111111111111111111111111111111)
    console.log(updateData)
    console.log(222222222222222222222222222222)
    if(updateData.affectedRows > 0){
      return true
    }
  }).catch(err => {
    return false
  })
  return isSuccess
}

/**
 * 管理员 活动 根据id删除
 * @param {*} id 活动id
 */
const adminDelActivity = (id) => {
  let sql = `delete
  from admin_activity
  where
  id='${id}';`
  // 返回promise  
  console.log(sql)
  return exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(updateData)
    if(updateData.affectedRows > 0){
      return true
    }
    return false
  })
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
const adminUpdateActivity = ({ id, title, desc, content, place, date, adminId }) => {
  if(!id || !title || !desc || !content || !place || !date || !adminId){
    return false
  }
  let sql = `update admin_activity set
  activity_title = '${title}',
  activity_desc = '${desc}',
  activity_content = '${content}',
  activity_place = '${place}',
  activity_date = '${date}',
  activity_adminId = '${adminId}'
  where id = '${id}';`
  // 返回promise  
  console.log(sql)
  let isSuccess = exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(111111111111111111111111111111)
    console.log(updateData)
    console.log(222222222222222222222222222222)
    if(updateData.affectedRows > 0){
      return true
    }
  }).catch(err => {
    return false
  })
  return isSuccess
}

/**
 * 管理员 活动 模糊查询
 * @param {*} id 活动id
 * @param {*} title 活动标题
 * @param {*} desc 活动描述
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动时间
 * @param {*} adminId 发布者-管理员id
 */
const adminSearchActivity = ({ limitF, limitS, id, title, desc, content, place, date, adminId, adminName }) => {
  let sql = `select
  admin_activity.id,
  activity_title,
  activity_desc,
  activity_content,
  activity_place,
  activity_date,
  activity_adminId,
  admin_name
  from admin_activity
  left join admin_account
  on admin_activity.activity_adminId = admin_account.id
  where 1=1`
  if(id){
    sql += ` and admin_activity.id = '${id}'`
  }
  if(title){
    sql += ` and activity_title like '%${title}%'`
  }
  if(desc){
    sql += ` and activity_desc like '%${desc}%'`
  }
  if(content){
    sql += ` and activity_content like '%${content}%'`
  }
  if(place){
    sql += ` and activity_place like '%${place}%'`
  }
  if(date){
    sql += ` and activity_date like '%${date}%'`
  }
  if(adminId){
    sql += ` and activity_adminId like '%${adminId}%'`
  }
  if(adminName){
    sql += ` and admin_name like '%${adminName}%'`
  }
  if(limitS){
    sql += ` order by id desc limit ${limitF}, ${limitS}`
  }
  sql += `;`
  // 返回promise  
  console.log(sql)
  return exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(updateData)
    if(updateData[0]){
      return updateData
    }
    return false
  })
}

module.exports = {
  adminAddActivity,
  adminDelActivity,
  adminUpdateActivity,
  adminSearchActivity
}