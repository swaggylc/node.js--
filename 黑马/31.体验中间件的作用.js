const express = require('express')
const app = express()

//定义简化的中间件函数
app.use(function (req, res, next) {
    //获取到请求到达服务器的时间
    const time = Date.now()
    //为 req 对象，挂载自定义属性，从而把时间共享给下游的中间件或路由
    req.startTime = time
    next()
})
//多个中间件之间，共享一份 req,res ，基于这样的特性，我们可以在上游的中间件中，统一为 req 或 res 对象添加自定义的属性
//或方法，以供下游的中间件或路由使用



//定义路由
app.get('/', (req, res) => {
    res.send('Home Page' + req.startTime)
})
app.get('/user', (req, res) => {
    res.send('User Page' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})