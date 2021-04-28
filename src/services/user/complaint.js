const { exec } = require('../../db/mysql')

/**
 * 用户 投诉建议 增加
 * @param {*} direction 投诉建议方向
 * @param {*} desc 投诉建议内容
 * @param {*} done 投诉建议是否已完成
 * @param {*} date 投诉建议日期
 * @param {*} userId 投诉建议人id
 */
const userAddUserComplaint = ({ direction, desc, done, date, userId }) => {
  // console.log(!direction || !desc || !done || !date || !userId )
  if(!direction || !desc || !done || !date || !userId ){
    return false
  }
  let sql = `insert into user_complaint (
    complaint_direction,
    complaint_desc,
    complaint_done,
    complaint_date,
    complaint_userId
  ) values (
    '${direction}',
    '${desc}',
    '${done}',
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
 * 用户 投诉建议 根据id删除
 * @param {*} id 投诉建议id
 */
const userDelUserComplaint = (id) => {
  let sql = `delete
  from user_complaint
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
 * 用户 投诉建议 根据id修改，所有必填
 * @param {*} id 用户账号id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
const userUpdateUserComplaint = ({ id, direction, desc, done, date, userId }) => {
  if(!id || !direction || !desc || !done || !date || !userId ){
    return false
  }
  let sql = `update user_complaint set
  complaint_direction = '${direction}',
  complaint_desc = '${desc}',
  complaint_done = '${done}',
  complaint_date = '${date}',
  complaint_userId = '${userId}'
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
 * 用户 投诉建议 模糊查询，不传参就 all查询
 * @param {*} id 用户账号id
 * @param {*} title 活动标题
 * @param {*} content 活动内容
 * @param {*} place 活动地点
 * @param {*} date 活动日期
 * @param {*} userId 活动发起人id
 */
const userSearchUserComplaint = ({ limitF, limitS, id, direction, desc, done, date, userId }) => {
  let sql = `select
  user_complaint.id,
  complaint_direction,
  complaint_desc,
  complaint_done,
  complaint_date,
  complaint_userId,
  acc_nickname,
  acc_phone
  from user_complaint
  left join user_account
  on user_complaint.complaint_userId = user_account.id
  where 1=1`
  if(id){
    sql += ` and user_complaint.id = '${id}'`
  }
  if(direction){
    sql += ` and complaint_direction like '%${direction}%'`
  }
  if(desc){
    sql += ` and complaint_desc like '%${desc}%'`
  }
  if(done){
    sql += ` and complaint_done like '%${done}%'`
  }
  if(date){
    sql += ` and complaint_date like '%${date}%'`
  }
  if(userId){
    sql += ` and complaint_userId like '%${userId}%'`
  }
  if(limitS){
    sql += ` order by id desc limit ${limitF}, ${limitS}`
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
  userAddUserComplaint,
  userDelUserComplaint,
  userUpdateUserComplaint,
  userSearchUserComplaint
}