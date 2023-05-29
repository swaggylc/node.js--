//1.这是路由模块
var express = require('express')

//2.创建路由对象
var router = express.Router()

//3.挂载具体的路由
//路由处理函数中只包含 req,res 
router.get('/user/list', (req, res) => {
    res.send('Get User List')
})
router.post('/user/ass', (req, res) => {
    res.send('Add New User')
})

//4.向外导出路由
module.exports = router