const { exec } = require('../../db/mysql')

/**
 * 用户 失物报备 增加
 * @param {*} name 失物名
 * @param {*} desc 失物内容
 * @param {*} place 失物地点
 * @param {*} date 失物日期
 * @param {*} done 失物是否已找回
 * @param {*} userId 失物人id
 */
const userAddUserLost = ({ name, desc, place, date, done, userId }) => {
  // console.log(!name || !desc || !place || !date || !done || !userId )
  if(!name || !desc || !place || !date || !done || !userId ){
    return false
  }
  let sql = `insert into user_lost (
    lost_name,
    lost_desc,
    lost_place,
    lost_date,
    lost_done,
    lost_userId
  ) values (
    '${name}',
    '${desc}',
    '${place}',
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
 * 用户 失物报备 根据id删除
 * @param {*} id 失物报备id
 */
const userDelUserLost = (id) => {
  let sql = `delete
  from user_lost
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
 * 用户 失物报备 根据id修改，所有必填
 * @param {*} id 失物报备id
 * @param {*} name 失物名
 * @param {*} desc 失物内容
 * @param {*} place 失物地点
 * @param {*} date 失物日期
 * @param {*} done 失物是否已找回
 * @param {*} userId 失物人id
 */
const userUpdateUserLost = ({ id, name, desc, place, date, done, userId }) => {
  if(!id || !name || !desc || !place || !date || !done || !userId ){
    return false
  }
  let sql = `update user_lost set
  lost_name = '${name}',
  lost_desc = '${desc}',
  lost_place = '${place}',
  lost_date = '${date}',
  lost_done = '${done}',
  lost_userId = '${userId}'
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
 * 用户 失物报备 模糊查询，不传参就 all查询
 * @param {*} id 失物报备id
 * @param {*} name 失物名
 * @param {*} desc 失物内容
 * @param {*} place 失物地点
 * @param {*} date 失物日期
 * @param {*} done 失物是否已找回
 * @param {*} userId 失物人id
 */
const userSearchUserLost = ({ limitF, limitS, id, name, desc, place, date, done, userId }) => {
  let sql = `select
  user_lost.id,
  lost_name,
  lost_desc,
  lost_place,
  lost_date,
  lost_done,
  lost_userId,
  acc_nickname,
  acc_phone
  from user_lost
  left join user_account
  on user_lost.lost_userId = user_account.id
  where 1=1`
  if(id){
    sql += ` and user_lost.id = '${id}'`
  }
  if(name){
    sql += ` and lost_name like '%${name}%'`
  }
  if(desc){
    sql += ` and lost_desc like '%${desc}%'`
  }
  if(place){
    sql += ` and lost_place like '%${place}%'`
  }
  if(date){
    sql += ` and lost_date like '%${date}%'`
  }
  if(done){
    sql += ` and lost_done like '%${done}%'`
  }
  if(userId){
    sql += ` and lost_userId like '%${userId}%'`
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
  userAddUserLost,
  userDelUserLost,
  userUpdateUserLost,
  userSearchUserLost
}