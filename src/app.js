const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const adminAccountAPI = require('./routes/admin-api/account')
const adminActivityAPI = require('./routes/admin-api/activity')
const adminNoticeAPI = require('./routes/admin-api/notice')

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

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
