const {
  userAddUserMarketGoods,
  userDelUserMarketGoods,
  userUpdateUserMarketGoods,
  userSearchUserMarketGoods
} = require('../../services/user/marketGoods')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  userAddMarketGoodsFail,
  userDelMarketGoodsFail,
  userUpdateMarketGoodsFail,
  userSearchMarketGoodsFail
} = require('../../model/errorInfo')
const {
  userAddMarketGoodsSuccess,
  userDelMarketGoodsSuccess,
  userUpdateMarketGoodsSuccess,
  userSearchMarketGoodsSuccess
} = require('../../model/successInfo')

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
async function addUserMarketGoods({ type, title, desc, number, price, picture, done, userId }) {
  // service
  const result = await userAddUserMarketGoods({ type, title, desc, number, price, picture, done, userId })
  if (result) {
    return new SuccessModel({ type, title, desc, number, price, picture, done, userId }, userAddMarketGoodsSuccess)
  }
  return new ErrorModel(userAddMarketGoodsFail)
}

/**
 * 用户 二手商品 根据id删除
 * @param {*} id 二手商品id
 */
async function delUserMarketGoods(id){
  const result = await userDelUserMarketGoods(id)
  if (result) {
    return new SuccessModel({id}, userDelMarketGoodsSuccess)
  }
  return new ErrorModel(userDelMarketGoodsFail)
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
async function updateUserMarketGoods({ id, type, title, desc, number, price, picture, done, userId }){
  const result = await userUpdateUserMarketGoods({ id, type, title, desc, number, price, picture, done, userId })
  if (result) {
    return new SuccessModel({ id, type, title, desc, number, price, picture, done, userId }, userUpdateMarketGoodsSuccess)
  }
  return new ErrorModel(userUpdateMarketGoodsFail)
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
async function searchUserMarketGoods({ id, type, title, desc, number, price, picture, done, userId }) {
  // service
  const result = await userSearchUserMarketGoods({ id, type, title, desc, number, price, picture, done, userId })
  if (result) {
    return new SuccessModel(result, userSearchMarketGoodsSuccess)
  }
  return new ErrorModel(userSearchMarketGoodsFail)
}

module.exports = {
  addUserMarketGoods,
  delUserMarketGoods,
  updateUserMarketGoods,
  searchUserMarketGoods
}