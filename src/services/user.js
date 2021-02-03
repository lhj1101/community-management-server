const { exec } = require('../db/mysql')

const loginUser = (nickName) => {
  let sql = `select * from user_account where 1=1 `
  if(nickName){
    sql += `and acc_user like '%${nickName}%' `
  }
  // if(password){
  //   sql += `and acc_password like '%${password}%' `
  // }
  sql += `order by id desc;`

  // 返回promise  
  console.log(exec(sql))
  return exec(sql).then(updateData => {
    console.log('updateDate is', updateData)
    console.log(updateData[0])
    if(updateData[0]){
      return updateData
    }
    return false
  })
}

module.exports = {
  loginUser
}