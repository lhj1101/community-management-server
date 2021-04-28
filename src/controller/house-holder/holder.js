const {
  houseAddHolder,
  houseDelHolder,
  houseUpdateHolder,
  houseSearchHolder
} = require('../../services/house-holder/holder')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  holderAddFail,
  holderDelFail,
  holderUpdateFail,
  holderSearchFail
} = require('../../model/errorInfo')
const {
  holderAddSuccess,
  holderDelSuccess,
  holderUpdateSuccess,
  holderSearchSuccess
} = require('../../model/successInfo')

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
async function addHolder({ user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }) {
  // service
  const result = await houseAddHolder({ user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber })
  if (result) {
    return new SuccessModel({ user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }, holderAddSuccess)
  }
  return new ErrorModel(holderAddFail)
}

/**
 * 住户 根据id删除
 * @param {*} id 管理员账号id
 */
async function delHolder(id){
  const result = await houseDelHolder(id)
  if (result) {
    return new SuccessModel({id}, holderDelSuccess)
  }
  return new ErrorModel(holderDelFail)
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
async function updateHolder({ id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }){
  const result = await houseUpdateHolder({ id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber })
  if (result) {
    return new SuccessModel({ id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }, holderUpdateSuccess)
  }
  return new ErrorModel(holderUpdateFail)
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
async function searchHolder({ limitF, limitS, id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber }) {
  // service
  const result = await houseSearchHolder({ limitF, limitS, id, user, sex, phone, communityName, buildingNumber, floorNumber, doorNumber })
  if (result) {
    return new SuccessModel(result, holderSearchSuccess)
  }
  return new ErrorModel(holderSearchFail)
}

module.exports = {
  addHolder,
  delHolder,
  updateHolder,
  searchHolder
}