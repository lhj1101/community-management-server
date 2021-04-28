const { exec } = require('../../db/mysql')

/**
 * 管理员 登录
 * @param {string} account 账号
 * @param {string} password 密码
 */
const userLogin = (account, password) => {
  let sql = `select * from user_account
  where acc_user = '${account}'
  and acc_password = '${password}';`
  // 返回promise  
  console.log(sql)
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
 * 用户账号 增加
 * @param {*} account 用户账号
 * @param {*} password 用户密码
 * @param {*} realName 用户真名
 * @param {*} nickName 用户昵称
 * @param {*} phone 用户联系电话
 * @param {*} pic 用户头像
 */
const userAddUserAccount = ({ account, password, realName, nickName, phone, pic, done }) => {
  // console.log(!account || !password || !realName || !nickName || !phone || !pic || !done)
  if(!account || !password || !realName || !nickName || !phone || !done){
    return false
  }
  let sql = `insert into user_account (
    acc_user,
    acc_password,
    acc_realname,
    acc_nickname,
    acc_phone,
    acc_pic,
    acc_done
    ) values (
    '${account}',
    '${password}',
    '${realName}',
    '${nickName}',
    '${phone}',
    '${pic}',
    '${done}'
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
 * 用户账号 根据id删除
 * @param {*} id 用户账号id
 */
const userDelUserAccount = (id) => {
  let sql = `delete
  from user_account
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
 * 用户账号 根据id修改，所有必填
 * @param {*} id 用户账号id
 * @param {*} account 用户账号
 * @param {*} password 用户密码
 * @param {*} realName 用户真名
 * @param {*} nickName 用户昵称
 * @param {*} phone 用户联系电话
 * @param {*} pic 用户头像
 */
const userUpdateUserAccount = ({ id, account, password, realName, nickName, phone, pic, done }) => {
  // if(!id || !account || !password || !realName || !nickName || !phone || !pic || !done){
  //   return false
  // }
  let sql = `update user_account set
  acc_user = '${account}',
  acc_password = '${password}',
  acc_realname = '${realName}',
  acc_nickname = '${nickName}',
  acc_phone = '${phone}',
  acc_pic = '${pic}',
  acc_done = '${done}'
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
 * 用户账号 模糊查询，不传参就 all查询
 * @param {*} id 用户账号id
 * @param {*} account 用户账号
 * @param {*} password 用户密码
 * @param {*} realName 用户真名
 * @param {*} nickName 用户昵称
 * @param {*} phone 用户联系电话
 * @param {*} pic 用户头像
 */
const userSearchUserAccount = ({ limitF, limitS, id, account, password, realName, nickName, phone, pic, done }) => {
  let sql = `select
  user_account.id,
  acc_user,
  acc_password,
  acc_realname,
  acc_nickname,
  acc_phone,
  acc_pic,
  acc_done
  from user_account
  where 1=1`
  if(id){
    sql += ` and user_account.id = '${id}'`
  }
  if(account){
    sql += ` and acc_user like '%${account}%'`
  }
  if(password){
    sql += ` and acc_password like '%${password}%'`
  }
  if(realName){
    sql += ` and acc_realname like '%${realName}%'`
  }
  if(nickName){
    sql += ` and acc_nickname like '%${nickName}%'`
  }
  if(phone){
    sql += ` and acc_phone like '%${phone}%'`
  }
  if(pic){
    sql += ` and acc_pic like '%${pic}%'`
  }
  if(done){
    sql += ` and acc_done like '%${done}%'`
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
  userLogin,
  userAddUserAccount,
  userDelUserAccount,
  userUpdateUserAccount,
  userSearchUserAccount
}