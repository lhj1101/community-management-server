const { exec } = require('../../db/mysql')

/**
 * 用户 组织活动 增加
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
const userAddUserActivity = ({ title, content, place, date, userId }) => {
  // console.log(!title || !content || !place || !date || !userId )
  if(!title || !content || !place || !date || !userId ){
    return false
  }
  let sql = `insert into user_activity (
    activity_title,
    activity_content,
    activity_place,
    activity_date,
    activity_userId
  ) values (
    '${title}',
    '${content}',
    '${place}',
    '${date}',
    '${userId}'
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
 * 用户 组织活动 根据id删除
 * @param {*} id 组织活动id
 */
const userDelUserActivity = (id) => {
  let sql = `delete
  from user_activity
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
 * 用户 组织活动 模糊查询，不传参就 all查询
 * @param {*} id 用户账号id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
const userUpdateUserActivity = ({ id, title, content, place, date, userId }) => {
  if(!id || !title || !content || !place || !date || !userId ){
    return false
  }
  let sql = `update user_activity set
  activity_title = '${title}',
  activity_content = '${content}',
  activity_place = '${place}',
  activity_date = '${date}',
  activity_userId = '${userId}'
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
 * 用户 组织活动 模糊查询，不传参就 all查询
 * @param {*} id 用户账号id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
const userSearchUserActivity = ({ id, title, content, place, date, userId }) => {
  let sql = `select
  user_activity.id,
  activity_title,
  activity_content,
  activity_place,
  activity_date,
  activity_userId,
  acc_nickname,
  acc_phone
  from user_activity
  left join user_account
  on user_activity.activity_userId = user_account.id
  where 1=1`
  if(id){
    sql += ` and user_activity.id = '${id}'`
  }
  if(title){
    sql += ` and activity_title like '%${title}%'`
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
  if(userId){
    sql += ` and activity_userId like '%${userId}%'`
  }
  sql += `;`;
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
  userAddUserActivity,
  userDelUserActivity,
  userUpdateUserActivity,
  userSearchUserActivity
}