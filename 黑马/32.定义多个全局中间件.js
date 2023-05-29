const express = require('express')
const app = express()

//定义简化的中间件函数
app.use(function (req, res, next) {
    console.log('调用了第一个全局中间件')
    next()
})

app.use(function (req, res, next) {
    console.log('调用了第二个全局中间件')
    next()
})

app.use(function (req, res, next) {
    console.log('调用了第三个全局中间件')
    next()
})




//定义路由
app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/user', (req, res) => {
    res.send('User Page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})