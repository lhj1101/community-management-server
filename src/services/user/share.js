const { exec } = require('../../db/mysql')

/**
 * 用户 分享 增加
 * @param {*} title 分享标题
 * @param {*} desc 分享描述
 * @param {*} content 分享内容
 * @param {*} picture 分享图片
 * @param {*} date 分享日期
 * @param {*} done 分享是否已删除
 * @param {*} userId 分享人id
 */
const userAddUserShare = ({ title, desc, content, picture, date, done, userId, userPic }) => {
  // console.log(!title || !desc || !content || !picture || !date || !done || !userId)
  if(!title || !desc || !content || !picture || !date || !done || !userId) {
    return false
  }
  let sql = `insert into user_share (
    share_title,
    share_desc,
    share_content,
    share_picture,
    share_date,
    share_done,
    share_userId,
    share_user_pic
  ) values (
    '${title}',
    '${desc}',
    '${content}',
    '${picture}',
    '${date}',
    '${done}',
    '${userId}',
    '${userPic}'
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
 * 用户 分享 根据id删除
 * @param {*} id 分享id
 */
const userDelUserShare = (id) => {
  let sql = `delete
  from user_share
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
 * 用户 分享 根据id修改，所有必填
 * @param {*} id 分享id
 * @param {*} title 分享标题
 * @param {*} desc 分享描述
 * @param {*} content 分享内容
 * @param {*} picture 分享图片
 * @param {*} date 分享日期
 * @param {*} done 分享是否已删除
 * @param {*} userId 分享人id
 */
const userUpdateUserShare = ({ id, title, desc, content, picture, date, done, userId }) => {
  if(!id || !title || !desc || !content || !picture || !date || !done || !userId){
    return false
  }
  let sql = `update user_share set
  share_title = '${title}',
  share_desc = '${desc}',
  share_content = '${content}',
  share_picture = '${picture}',
  share_date = '${date}',
  share_done = '${done}',
  share_userId = '${userId}'
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
 * 用户 分享 模糊查询，不传参就 all查询
 * @param {*} id 分享id
 * @param {*} title 分享标题
 * @param {*} desc 分享描述
 * @param {*} content 分享内容
 * @param {*} picture 分享图片
 * @param {*} date 分享日期
 * @param {*} done 分享是否已删除
 * @param {*} userId 分享人id
 * @param {*} userPic 分享人头像
 */
const userSearchUserShare = ({ limitF, limitS, id, title, desc, content, picture, date, done, userId, userPic }) => {
  let sql = `select
  user_share.id,
  share_title,
  share_desc,
  share_content,
  share_picture,
  share_date,
  share_done,
  share_userId,
  share_user_pic,
  acc_nickname,
  acc_phone
  from user_share
  left join user_account
  on user_share.share_userId = user_account.id
  where 1=1`
  if(id){
    sql += ` and user_share.id = '${id}'`
  }
  if(title){
    sql += ` and share_title like '%${title}%'`
  }
  if(desc){
    sql += ` and share_desc like '%${desc}%'`
  }
  if(content){
    sql += ` and share_content like '%${content}%'`
  }
  if(picture){
    sql += ` and share_picture like '%${picture}%'`
  }
  if(date){
    sql += ` and share_date like '%${date}%'`
  }
  if(done){
    sql += ` and share_done like '%${done}%'`
  }
  if(userId){
    sql += ` and share_userId like '%${userId}%'`
  }
  if(userPic){
    sql += ` and share_user_pic like '%${userPic}%'`
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
  userAddUserShare,
  userDelUserShare,
  userUpdateUserShare,
  userSearchUserShare
}