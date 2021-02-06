const { exec } = require('../../db/mysql')

/**
 * 管理员 登录
 * @param {string} account 账号
 * @param {string} password 密码
 */
const adminLogin = (account, password) => {
  let sql = `select * from admin_account where admin_user = '${account}'
  and admin_password = '${password}';`
  // 返回promise  
  // console.log(exec(sql))
  return exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(updateData)
    console.log(updateData[0])
    if(updateData[0]){
      return updateData
    }
    return false
  })
}

/**
 * 管理员账号 增加
 * @param {*} account 管理员账号
 * @param {*} password 管理员密码
 * @param {*} adminName 管理员名
 */
const adminAddAdminAccount = ({ account, password, adminName }) => {
  // console.log(!account || !password || !adminName)
  if(!account || !password || !adminName){
    return false
  }
  let sql = `insert into admin_account (
    admin_user,
    admin_password,
    admin_name
  ) values (
    '${account}',
    '${password}',
    '${adminName}'
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
 * 管理员账号 根据id删除
 * @param {*} id 管理员账号id
 */
const adminDelAdminAccount = (id) => {
  let sql = `delete
  from admin_account
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
 * 管理员账号 根据id修改，所有必填
 * @param {*} id 管理员账号id
 * @param {*} account 管理员账号
 * @param {*} password 管理员密码
 * @param {*} adminName 管理员名
 */
const adminUpdateAdminAccount = ({ id, account, password, adminName }) => {
  if(!id || !account || !password || !adminName){
    return false
  }
  let sql = `update admin_account set
  admin_user = '${account}',
  admin_password = '${password}',
  admin_name = '${adminName}'
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
 * 管理员账号 模糊查询，不传参就 all查询
 * @param {*} id 管理员账号id
 * @param {*} account 管理员账号
 * @param {*} adminName 管理员名
 */
const adminSearchAdminAccount = ({ id, account, adminName }) => {
  let sql = `select
  admin_account.id,
  admin_user,
  admin_password,
  admin_name
  from admin_account
  where 1=1`
  if(id){
    sql += ` and admin_account.id = '${id}'`
  }
  if(account){
    sql += ` and admin_user like '%${account}%'`
  }
  if(adminName){
    sql += ` and admin_name like '%${adminName}%'`
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
  adminLogin,
  adminAddAdminAccount,
  adminDelAdminAccount,
  adminUpdateAdminAccount,
  adminSearchAdminAccount
}