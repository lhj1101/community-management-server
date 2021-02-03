const { exec } = require('../../db/mysql')

const loginUser = (user, password) => {
  let sql = `select * from user_account where acc_user = '${user}'
  and acc_password = '${password}'
  order by id desc;`
  // 返回promise  
  // console.log(exec(sql))
  return exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
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