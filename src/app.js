const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
app.use(cors())

const adminAccountAPI = require('./routes/admin-api/account')
const adminActivityAPI = require('./routes/admin-api/activity')
const adminNoticeAPI = require('./routes/admin-api/notice')
const houseHolderAPI = require('./routes/house-holder-api/holder')
const userAccountAPI = require('./routes/user-api/account')
const userActivityAPI = require('./routes/user-api/activity')
const userComplaintAPI = require('./routes/user-api/complaint')
const userLostAPI = require('./routes/user-api/lost')
const userMarketGoodstAPI = require('./routes/user-api/marketGoods')
const userRepairAPI = require('./routes/user-api/repair')
const userShareAPI = require('./routes/user-api/share')
const userVisitorAPI = require('./routes/user-api/visitor')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// // logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(adminAccountAPI.routes(), adminAccountAPI.allowedMethods())
app.use(adminActivityAPI.routes(), adminActivityAPI.allowedMethods())
app.use(adminNoticeAPI.routes(), adminNoticeAPI.allowedMethods())
app.use(houseHolderAPI.routes(), houseHolderAPI.allowedMethods())
app.use(userAccountAPI.routes(), userAccountAPI.allowedMethods())
app.use(userActivityAPI.routes(), userActivityAPI.allowedMethods())
app.use(userComplaintAPI.routes(), userComplaintAPI.allowedMethods())
app.use(userLostAPI.routes(), userLostAPI.allowedMethods())
app.use(userMarketGoodstAPI.routes(), userMarketGoodstAPI.allowedMethods())
app.use(userRepairAPI.routes(), userRepairAPI.allowedMethods())
app.use(userShareAPI.routes(), userShareAPI.allowedMethods())
app.use(userVisitorAPI.routes(), userVisitorAPI.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
