const { exec } = require('../../db/mysql')

/**
 * 用户 访客 增加
 * @param {*} name 访客名
 * @param {*} sex 访客性别
 * @param {*} phone 访客联系电话
 * @param {*} stayTime 访客是否过夜
 * @param {*} date 访客日期
 * @param {*} done 访客是否已经离开
 * @param {*} userId 被访人id
 */
const userAddUserVisitor = ({ name, sex, phone, stayTime, date, done, userId }) => {
  // console.log(!name || !sex || !phone || !stayTime || !date || !done || !userId)
  if(!name || !sex || !phone || !stayTime || !date || !done || !userId){
    return false
  }
  let sql = `insert into user_visitor (
    visitor_name,
    visitor_sex,
    visitor_phone,
    visitor_stay_time,
    visitor_date,
    visitor_done,
    visitor_userId
  ) values (
    '${name}',
    '${sex}',
    '${phone}',
    '${stayTime}',
    '${date}',
    '${done}',
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
 * 用户 访客 根据id删除
 * @param {*} id 访客id
 */
const userDelUserVisitor = (id) => {
  let sql = `delete
  from user_visitor
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
 * 用户 访客 根据id修改，所有必填
 * @param {*} id 访客id
 * @param {*} name 访客名
 * @param {*} sex 访客性别
 * @param {*} phone 访客联系电话
 * @param {*} stayTime 访客是否过夜
 * @param {*} date 访客日期
 * @param {*} done 访客是否已经离开
 * @param {*} userId 被访人id
 */
const userUpdateUserVisitor = ({ id, name, sex, phone, stayTime, date, done, userId }) => {
  if(!id || !name || !sex || !phone || !stayTime || !date || !done || !userId){
    return false
  }
  let sql = `update user_visitor set
  visitor_name = '${name}',
  visitor_sex = '${sex}',
  visitor_phone = '${phone}',
  visitor_stay_time = '${stayTime}',
  visitor_date = '${date}',
  visitor_done = '${done}',
  visitor_userId = '${userId}'
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
 * 用户 访客 模糊查询，不传参就 all查询
 * @param {*} id 访客id
 * @param {*} name 访客名
 * @param {*} sex 访客性别
 * @param {*} phone 访客联系电话
 * @param {*} stayTime 访客是否过夜
 * @param {*} date 访客日期
 * @param {*} done 访客是否已经离开
 * @param {*} userId 被访人id
 */
const userSearchUserVisitor = ({ limitF, limitS, id, name, sex, phone, stayTime, date, done, userId }) => {
  let sql = `select
  user_visitor.id,
  visitor_name,
  visitor_sex,
  visitor_phone,
  visitor_stay_time,
  visitor_date,
  visitor_done,
  visitor_userId,
  acc_realname,
  acc_phone
  from user_visitor
  left join user_account
  on user_visitor.visitor_userId = user_account.id
  where 1=1`
  if(id){
    sql += ` and user_visitor.id = '${id}'`
  }
  if(name){
    sql += ` and visitor_name like '%${name}%'`
  }
  if(sex){
    sql += ` and visitor_sex like '%${sex}%'`
  }
  if(phone){
    sql += ` and visitor_phone like '%${phone}%'`
  }
  if(stayTime){
    sql += ` and visitor_stay_time like '%${stayTime}%'`
  }
  if(date){
    sql += ` and visitor_date like '%${date}%'`
  }
  if(done){
    sql += ` and visitor_done like '%${done}%'`
  }
  if(userId){
    sql += ` and visitor_userId like '%${userId}%'`
  }
  if(userId){
    sql += ` and activity_userId like '%${userId}%'`
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
  userAddUserVisitor,
  userDelUserVisitor,
  userUpdateUserVisitor,
  userSearchUserVisitor
}