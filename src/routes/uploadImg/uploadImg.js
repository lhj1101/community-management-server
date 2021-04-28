const router = require('koa-router')()
const path = require('path')
const multer = require('koa-multer');//加载koa-multer模块

//上传文件存放路径、及文件命名
const storage = multer.diskStorage({
  // 文件保存路径
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname ,'..','..','public','uploads'))
  },
  // 修改文件名称
  filename: function (req, file, cb) {
    let type = file.originalname.split('.')[1]
    cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
  }
})
//文件上传限制
const limits = {
  fields: 10,//非文件字段的数量
  fileSize: 500 * 1024,//文件大小 单位 b
  files: 1//文件数量
}
const upload = multer({storage,limits})
//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  }
})
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

module.exports = router
