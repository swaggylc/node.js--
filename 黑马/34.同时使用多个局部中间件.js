const express = require('express')
const app = express()

//定义简化的中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了第一个局部中间件')
    //务必调用 next() 函数，将流转关系交给下一个中间件或路由
    next()
}

const mw2 = (req, res, next) => {
    console.log('调用了第二个局部中间件')
    //务必调用 next() 函数，将流转关系交给下一个中间件或路由
    next()
}



//定义路由
app.get('/', mw1, mw2, (req, res) => {
    res.send('Home Page')
})
app.get('/user', (req, res) => {
    res.send('User Page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})