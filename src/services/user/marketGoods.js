const { exec } = require('../../db/mysql')

/**
 * 用户 二手商品 增加
 * @param {*} type 类型
 * @param {*} title 标题
 * @param {*} desc 描述
 * @param {*} number 数量
 * @param {*} price 价格
 * @param {*} picture 商品图
 * @param {*} done 是否已经卖出/下架
 * @param {*} userId 二手商品卖家id
 */
const userAddUserMarketGoods = ({ type, title, desc, number, price, picture, done, userId }) => {
  // console.log(!type || !title || !desc || !number || !price || !picture || !done || !userId)
  if(!type || !title || !desc || !number || !price || !picture || !done || !userId){
    return false
  }
  let sql = `insert into user_market_goods (
    goods_type,
    goods_title,
    goods_desc,
    goods_number,
    goods_price,
    goods_picture,
    goods_done,
    goods_userId
  ) values (
    '${type}',
    '${title}',
    '${desc}',
    '${number}',
    '${price}',
    '${picture}',
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
 * 用户 二手商品 根据id删除
 * @param {*} id 二手商品id
 */
const userDelUserMarketGoods = (id) => {
  let sql = `delete
  from user_market_goods
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
 * 用户 二手商品 根据id修改，所有必填
 * @param {*} id 二手商品id
 * @param {*} type 类型
 * @param {*} title 标题
 * @param {*} desc 描述
 * @param {*} number 数量
 * @param {*} price 价格
 * @param {*} picture 商品图
 * @param {*} done 是否已经卖出/下架
 * @param {*} userId 二手商品卖家id
 */
const userUpdateUserMarketGoods = ({ id, type, title, desc, number, price, picture, done, userId }) => {
  if(!id || !type || !title || !desc || !number || !price || !picture || !done || !userId){
    return false
  }
  let sql = `update user_market_goods set
  goods_type = '${type}',
  goods_title = '${title}',
  goods_desc = '${desc}',
  goods_number = '${number}',
  goods_price = '${price}',
  goods_picture = '${picture}',
  goods_done = '${done}',
  goods_userId = '${userId}'
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
 * 用户 二手商品 模糊查询，不传参就 all查询
 * @param {*} id 二手商品id
 * @param {*} type 类型
 * @param {*} title 标题
 * @param {*} desc 描述
 * @param {*} number 数量
 * @param {*} price 价格
 * @param {*} picture 商品图
 * @param {*} done 是否已经卖出/下架
 * @param {*} userId 二手商品卖家id
 */
const userSearchUserMarketGoods = ({ limitF, limitS, id, type, title, desc, number, price, picture, done, userId }) => {
  let sql = `select
  user_market_goods.id,
  goods_type,
  goods_title,
  goods_desc,
  goods_number,
  goods_price,
  goods_picture,
  goods_done,
  goods_userId,
  acc_nickname,
  acc_phone
  from user_market_goods
  left join user_account
  on user_market_goods.goods_userId = user_account.id
  where 1=1`
  if(id){
    sql += ` and user_market_goods.id = '${id}'`
  }
  if(type){
    sql += ` and goods_type like '%${type}%'`
  }
  if(title){
    sql += ` and goods_title like '%${title}%'`
  }
  if(desc){
    sql += ` and goods_desc like '%${desc}%'`
  }
  if(number){
    sql += ` and goods_number like '%${number}%'`
  }
  if(price){
    sql += ` and goods_price like '%${price}%'`
  }
  if(picture){
    sql += ` and goods_picture like '%${picture}%'`
  }
  if(done){
    sql += ` and goods_done like '%${done}%'`
  }
  if(userId){
    sql += ` and goods_userId like '%${userId}%'`
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
  userAddUserMarketGoods,
  userDelUserMarketGoods,
  userUpdateUserMarketGoods,
  userSearchUserMarketGoods
}