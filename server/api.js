// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
'use strict'
const db = require('./db')
const express = require('express')
const router = express.Router()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
router.use(cors({origin: '*'}))
/** ************ 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取已有账号接口
var obj = ''
router.get('/all', function (req, res) {
  db.thelegends.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    obj = JSON.parse(JSON.stringify(docs))
    console.log('xixi' + docs)
    res.json(obj)
  })
  return obj
})
router.post('/hero/loging', (req, res) => {
  var info = req.body
  var getName = info.name
  var getPassword = info.password
  console.log(getName)
  console.log(getPassword)
  // console.log(req.query['name'])
  db.User.find({'name': getName})
    .then(hero => {
      // res.json(hero)
      console.log(hero)
      var orgPas = hero[0].password
      console.log(hero[0].password)
      if (getPassword === orgPas) {
        console.log('进来了')
        // resconsole.log(getName)
        res.cookie('username', hero[0].name, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        res.json({
          'status': 123,
          msg: '',
          result: {
            userName: hero[0].name
          }
        })
      } else {
        res.json({
          status: 400
        })
      }
    })
    .catch(err => {
      res.json(err + 'dd')
    })
})
router.post('/hero/register', (req, res) => {
  // 使用Hero model上的create方法储存数据
  db.User.find({ name: req.body.name }, (err, docs) => {
    if (err) {
      res.send(err)
      return
    }
    if (docs.length > 0) {
      res.send({ 'status': 0, 'msg': '用户名已注册' })
    } else {
      // Hero.find({ name: req.body.name }, (err, docs) => {
      let newHero = new db.User({
        name: req.body.name,
        password: req.body.password

      })
      newHero.save(function (err) {
        if (err) {
          res.send(err)
        } else {
          res.send({ 'status': 1, 'msg': '注册成功' })
        }
      })
      // })
    }
  })
})

module.exports = router
