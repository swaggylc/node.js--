const express=require('express')
var router=express.Router()
router.get('/user',function(req,res){
    res.send('<h1>这是用户主界面</h1>')
})
router.get('/login',function(req,res){
    res.send('<h1>这是用户登陆界面</h1>')
})
module.exports=router
