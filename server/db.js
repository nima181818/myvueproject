// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose')
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://127.0.0.1:27017/mathematics') // 地址跟第一步的地址对应。

// 为这次连接绑定事件
const db = mongoose.connection
db.once('error', () => console.log('Mongo connection error'))
db.once('open', () => console.log('Mongozi connection successed'))
/** ************ 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
  'name': String,
  'position': String,
  'bdeath': String,
  'findings': String,
  'avator': String,
  'detail': String
})
const userSchema = new mongoose.Schema({
  name: String,
  password: String
})

/** ************ 定义模型Model **************/
const Models = {
  thelegends: mongoose.model('thelegends', loginSchema),
  User: mongoose.model('Users', userSchema)
}

module.exports = Models
