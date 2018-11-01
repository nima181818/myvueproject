// 引入编写好的api
const api = require('./api')
const db = require('./db')
// 引入文件模块
const fs = require('fs')
// 引入处理路径的模块
const path = require('path')
// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express')
const app = express()
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(api)
var obj = []
// app.get('/api/', (req, res) => {
//   db.find({}, function (err, docs) {
//     if (err) {
//       console.error(err)
//       return
//     }
//     obj = JSON.parse(JSON.stringify(docs))
//     console.log('xixi' + obj)
//     // res.send(obj)
//   })
//   res.json({
//     errno: 0,
//     data: obj
//
//   })
// })
app.use(cors({origin: '*'}))
// 监听8088端口
app.listen(8066)
console.log('success listen…………')
