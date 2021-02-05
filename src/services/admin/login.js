const { exec } = require('../../db/mysql')

const adminLogin = (user, password) => {
  let sql = `select * from admin_account where admin_user = '${user}'
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

module.exports = {
  adminLogin
}