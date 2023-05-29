const express = require('express')
const app = express()

// //定义最简单的中间件函数
// //注意：中间件函数包含 req,res,next
// const mw = function (req, res, next) {
//     console.log('这是最简单的中间件函数')

//     //调用 next() 函数,把流转关系转交给下一个中间件或路由
//     next()
// }

// //将 mw 注册为全局生效的中间件
// //客户端发起的任何请求，在到达服务器后，都会触发的中间件，叫做全局生效的中间件
// //调用 app.use(中间件函数) 函数，注册一个全局中间件
// app.use(mw)


//定义简化的中间件函数
app.use(function(req,res,next){
    console.log('这是简化的中间件函数')
    next()
})




//定义路由
app.get('/',(req,res) => {
    res.send('Home Page')
})
app.get('/user',(req,res) => {
    res.send('User Page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})