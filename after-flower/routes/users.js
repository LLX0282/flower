var express = require('express');
var router = express.Router();
const querySql = require('../db/index')
const {
  PWD_SALT,
  PRIVATE_KEY,
  EXPIRESD
} = require('../utils/constant')
const {
  md5,
  upload,
  SmsConfing
} = require('../utils/index.js')
const jwt = require('jsonwebtoken');
const {
  token
} = require('morgan');
//
//
//短信验证码发送接口
router.post('/sendSms', async (req, res, next) => {
  let {
    phoneNumber
  } = req.body
  let Num = '';
  for (var i = 0; i < 6; i++) {
    Num += Math.floor(Math.random() * 9 )
  }
  res.cookie(phoneNumber, Num, {
    maxAge: 60000
  });
  console.log(phoneNumber, Num)
  var resulr = await SmsConfing(phoneNumber,Num)
  if(resulr){
    console.log('发送成功')
    res.cookie(phoneNumber, Num, {
      maxAge: 60000
    });
    res.send({
      code: 0,
      msg: '发送成功',
    })
  }else{
    console.log('发送失败')
    res.send({
      code: -1,
      msg: '发送失败',
    })
  }
});

/* 注册接口 */
router.post('/register', async (req, res, next) => {
  let {
    username,
    password,
    nickname
  } = req.body
  try {
    let user = await querySql('select * from user where username = ?', [username])
    if (!user || user.length === 0) {
      password = md5(`${password}${PWD_SALT}`) //加密
      console.log(password)
      await querySql('insert into user(username,password,nickname) value (?,?,?)', [username, password, nickname])
      res.send({
        code: 0,
        msg: '注册成功'
      })
    } else {
      res.send({
        code: -1,
        msg: '该账号已注册'
      })
    }
  } catch (e) {
    console.log(e)
    next(e)
  }
});
router.post('/register2', async (req, res, next) => {
  let {
    phoneNumber,
    vCode
  } = req.body
  console.log(req.cookies[phoneNumber]) //拿取cookies
  let Num = req.cookies[phoneNumber]
  if (Num == vCode) {
    res.send({
      code: 0,
      msg: '验证码正确',
    })
  } else {
    res.send({
      code: 0,
      msg: '验证码错误',
    })
  }
});
//登录接口
router.post('/login', async (req, res, next) => {
  let {
    username,
    password
  } = req.body
  try {
    let user = await querySql('select * from user where username = ?', [username])
    if (!user || user.length === 0) {
      res.send({
        code: -1,
        msg: '该账户不存在'
      })
    } else {
      password = md5(`${password}${PWD_SALT}`) //加密
      let resulr = await querySql('select * from user where password = ? and username = ?', [password, username])
      console.log(resulr)
      if (!resulr || resulr.length === 0) {
        res.send({
          code: -1,
          msg: '账号或者密码错误'
        })
      } else {
        let token = jwt.sign({
          username
        }, PRIVATE_KEY, {
          expiresIn: EXPIRESD
        })
        res.send({
          code: 0,
          msg: '登陆成功',
          token: token
        })
      }

    }
  } catch (e) {
    console.log(e)
    next(e)
  }
})
//获取用户信息接口
router.get('/info', async (req, res, next) => {
  let {
    username
  } = req.user
  try {
    let userinfo = await querySql("select username,nickname,head_img from user where username = ?", [username])
    res.send({
      code: 0,
      msg: '获取成功',
      data: userinfo[0]
    })
  } catch (e) {
    console.log(e)
    next(e)
  }
})
//头像上传接口
router.post('/upload', upload.single('head_img'), async (req, res, next) => {
  let imgPath = req.file.path.split('public')[1]
  let imgUrl = 'http://192.168.1.104:3000' + imgPath
  res.send({
    code: 0,
    msg: '上传成功',
    data: imgUrl
  })
})
//用户信息更新接口
router.post('/updataUser', async (req, res, next) => {
  let {
    nickname,
    head_img
  } = req.body
  let {
    username
  } = req.user
  try {
    let result = await querySql("update user set nickname=?,head_img = ? where username = ?", [nickname, head_img, username])
    console.log(result)
    if (result != 0 || result) {
      res.send({
        code: 0,
        msg: '更新成功',
      })
    } else {
      res.send({
        code: -1,
        msg: '更新失败',
      })
    }
  } catch (e) {
    next(e)
  }
})
module.exports = router;