var express = require('express');
var router = express.Router();
const querySql = require('../db/index')
/* 新增博客接口 */
router.post('/add',async function (req, res, next) {
  let {title, content} = req.body
  let {username} = req.user
  try {

    let result = await querySql("select id from user where username = ?", [username])
    let user_id = result[0].id
    await querySql('insert into article(title,content,user_id,create_time) values(?,?,?,NOW())',[title,content,user_id])
    res.send({code:0,msg:'新增成功',data:null})
  } catch (e) {
    next(e)
  }
});
//查询全部接口列表
router.get('/allList',async function (req, res, next) {
  
  try {
    let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article'
    
    let result = await querySql(sql)
    console.log(result)
    res.send({code:0,msg:'获取成功',data:result})
  } catch (e) {
    next(e)
  }
});
//获取我的博客列表接口
router.get('/myList',async function (req, res, next) {
  let {username}=req.user
  try {
    let userSql='select id from user where username = ?'
    let user=await querySql(userSql,[username])
    let user_id=user[0].id
    let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article where user_id = ?'
    let result = await querySql(sql,[user_id])
    res.send({code:0,msg:'获取成功',data:result})
  } catch (e) {
    next(e)
  }
});
//获取博客详情接⼝
router.get('/detail',async function (req, res, next) {
  let {article_id}=req.query
  console.log(article_id)
  try {
    let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article where id = ?'
    let result = await querySql(sql,[article_id])
    console.log(result)
    res.send({code:0,msg:'获取成功',data:result[0]})
  } catch (e) {
    next(e)
  }
});
//博客修改接口
router.post('/update',async function (req, res, next) {
  let {article_id,title,content} = req.body
  let {username} = req.user
  try {
    let userSql = 'select id from user where username = ?'
    let user = await querySql(userSql,[username])
    let user_id = user[0].id
    let sql = 'update article set title=?,content=?  where id=? and user_id=?'
    let result = await querySql(sql,[title,content,article_id,user_id])
    res.send({code:0,msg:'更新成功',data:null})
  } catch (e) {
    next(e)
  }
});
//博客删除接口
router.post('/delete',async function (req, res, next) {
  let {article_id} = req.body
  let {username} = req.user
  try {
    let userSql = 'select id from user where username = ?'
    let user = await querySql(userSql,[username])
    let user_id = user[0].id
    let sql = 'delete from article where id=? and user_id =?'
    let result = await querySql(sql,[article_id,user_id])
    res.send({code:0,msg:'删除成功',data:null})
  } catch (e) {
    next(e)
  }
});
//发表评论
router.post('/public',async (req,res,next)=>{
  try {
    let {content,article_id}=req.body
    let {username} = req.user
    let userSql = 'select id from user where username = ?'
    let user = await querySql(userSql,[username])
    let user_id = user[0].id
    let sql = 'insert into comment (user_id,article_id,cm_content,create_time) values(?,?,?,NOW())'
    let result = await querySql(sql,[user_id,article_id,content])
    res.send({code:0,msg:'评论成功',data:null})
  } catch (e) {
    next(e)
  }
})
//查看制定微博评论
router.get('/getComment',async (req,res,next)=>{
  let {article_id} = req.query
  try {
    let sql = 'SELECT b.id,b.cm_content,b.user_id,a.head_img,DATE_FORMAT(b.create_time,"%Y-%m-%d %H:%i:%s")AS create_time FROM user AS a,`comment` AS b WHERE a.id=b.user_id and b.article_id = ?'
    let result = await querySql(sql,[article_id])
    res.send({code:0,msg:'获取成功',data:result})
  } catch (e) {
    next(e)
  }
})
//微博假删
router.post('/del',async (req,res,next)=>{
    let {id}=req.body
    let {username} = req.user
  try {
    
    let userSql = 'select id from user where username = ?'
    let user = await querySql(userSql,[username])
    let user_id = user[0].id
    let sql = 'update article set state=1 where user_id=? and id=?'
    let result = await querySql(sql,[user_id,id])
    res.send({code:0,msg:'删除成功',data:null})
  } catch (e) {
    next(e)
  }
})
module.exports = router;