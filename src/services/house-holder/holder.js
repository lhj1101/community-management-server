const { exec } = require('../../db/mysql')

/**
 * 住户 增加
 * @param {*} user 住户名
 * @param {*} sex 住户性别
 * @param {*} phone 住户联系电话
 * @param {*} communityName 住户小区名
 * @param {*} buildingNumber 住户楼栋
 * @param {*} floorNumber 住户楼层
 * @param {*} doorNumber 住户门牌号
 */
const houseAddHolder = ({ user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }) => {
  // console.log(!user || !sex || !phone || !communityName || !buildingNumber || !floorNumber || !doorNumber)
  if(!user || !sex || !phone || !communityName || !buildingNumber || !floorNumber || !doorNumber){
    return false
  }
  let sql = `insert into house_holder (
    holder_user,
    holder_sex,
    holder_phone,
    holder_community,
    holder_building_number,
    holder_floor_number,
    holder_door_number
  ) values (
    '${user}',
    '${sex}',
    '${phone}',
    '${communityName}',
    '${buildingNumber}',
    '${floorNumber}',
    '${doorNumber}'
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
 * 住户 根据id删除
 * @param {*} id 管理员账号id
 */
const houseDelHolder = (id) => {
  let sql = `delete
  from house_holder
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
 * 住户 根据id修改，所有必填
 * @param {*} id 住户id
 * @param {*} user 住户名
 * @param {*} sex 住户性别
 * @param {*} phone 住户联系电话
 * @param {*} communityName 住户小区名
 * @param {*} buildingNumber 住户楼栋
 * @param {*} floorNumber 住户楼层
 * @param {*} doorNumber 住户门牌号
 */
const houseUpdateHolder = ({ id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }) => {
  if(!id || !user || !sex || !phone || !communityName || !buildingNumber || !floorNumber || !doorNumber){
    return false
  }
  let sql = `update house_holder set
  holder_user = '${user}',
  holder_sex = '${sex}',
  holder_phone = '${phone}',
  holder_community = '${communityName}',
  holder_building_number = '${buildingNumber}',
  holder_floor_number = '${floorNumber}',
  holder_door_number = '${doorNumber}'
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
 * 住户 模糊查询，不传参就 all查询
 * @param {*} id 住户id
 * @param {*} user 住户名
 * @param {*} sex 住户性别
 * @param {*} phone 住户联系电话
 * @param {*} communityName 住户小区名
 * @param {*} buildingNumber 住户楼栋
 * @param {*} floorNumber 住户楼层
 * @param {*} doorNumber 住户门牌号
 */
const houseSearchHolder = ({ limitF, limitS, id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }) => {
  let sql = `select
  house_holder.id,
  holder_user,
  holder_sex,
  holder_phone,
  holder_community,
  holder_building_number,
  holder_floor_number,
  holder_door_number
  from house_holder
  where 1=1`
  if(id){
    sql += ` and house_holder.id = '${id}'`
  }
  if(user){
    sql += ` and holder_user like '%${user}%'`
  }
  if(sex){
    sql += ` and holder_sex like '%${sex}%'`
  }
  if(phone){
    sql += ` and holder_phone like '%${phone}%'`
  }
  if(communityName){
    sql += ` and holder_community like '%${communityName}%'`
  }
  if(buildingNumber){
    sql += ` and holder_building_number like '%${buildingNumber}%'`
  }
  if(floorNumber){
    sql += ` and holder_floor_number like '%${floorNumber}%'`
  }
  if(doorNumber){
    sql += ` and holder_door_number like '%${doorNumber}%'`
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
  houseAddHolder,
  houseDelHolder,
  houseUpdateHolder,
  houseSearchHolder
}