const { exec } = require('../../db/mysql')

/**
 * 用户 报修 增加
 * @param {*} name 报修物品
 * @param {*} extent 损坏程度
 * @param {*} place 损坏地点
 * @param {*} done 是否已经修复完成
 * @param {*} userId 报修人id
 */
const userAddUserRepair = ({ name, extent, place, done, userId }) => {
  // console.log(!name || !extent || !place || !done || !userId)
  if(!name || !extent || !place || !done || !userId){
    return false
  }
  let sql = `insert into user_repair (
    repair_name,
    repair_extent,
    repair_place,
    repair_done,
    repair_userId
  ) values (
    '${name}',
    '${extent}',
    '${place}',
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
 * 用户 报修 根据id删除
 * @param {*} id 报修id
 */
const userDelUserRepair = (id) => {
  let sql = `delete
  from user_repair
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
 * 用户 报修 根据id修改，所有必填
 * @param {*} id 报修id
 * @param {*} name 报修物品
 * @param {*} extent 损坏程度
 * @param {*} place 损坏地点
 * @param {*} done 是否已经修复完成
 * @param {*} userId 报修人id
 */
const userUpdateUserRepair = ({ id, name, extent, place, done, userId }) => {
  if(!id || !name || !extent || !place || !done || !userId) {
    return false
  }
  let sql = `update user_repair set
  repair_name = '${name}',
  repair_extent = '${extent}',
  repair_place = '${place}',
  repair_done = '${done}',
  repair_userId = '${userId}'
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
 * 用户 报修 模糊查询，不传参就 all查询
 * @param {*} id 报修id
 * @param {*} name 报修物品
 * @param {*} extent 损坏程度
 * @param {*} place 损坏地点
 * @param {*} done 是否已经修复完成
 * @param {*} userId 报修人id
 */
const userSearchUserRepair = ({ id, name, extent, place, done, userId }) => {
  let sql = `select
  user_repair.id,
  repair_name,
  repair_extent,
  repair_place,
  repair_done,
  repair_userId,
  acc_nickname,
  acc_phone
  from user_repair
  left join user_account
  on user_repair.repair_userId = user_account.id
  where 1=1`
  if(id){
    sql += ` and user_repair.id = '${id}'`
  }
  if(name){
    sql += ` and repair_name like '%${name}%'`
  }
  if(extent){
    sql += ` and repair_extent like '%${extent}%'`
  }
  if(place){
    sql += ` and repair_place like '%${place}%'`
  }
  if(done){
    sql += ` and repair_done like '%${done}%'`
  }
  if(userId){
    sql += ` and repair_userId like '%${userId}%'`
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
  userAddUserRepair,
  userDelUserRepair,
  userUpdateUserRepair,
  userSearchUserRepair
}