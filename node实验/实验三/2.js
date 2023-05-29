const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (req, res) => {
    //1.获取请求的url地址
    const url = req.url
    //2.设置 Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (url === '/') {
        res.write('这是首页')
        res.end('this is index page')
    }
    else if (url === '/login') {
        res.write('这是登陆页')
        res.end('this is login page')
    }
    else if (url === '/register') {
        res.write('这是注册页')
        res.end('this is register page')
    } else if (url === '/about') {
        res.write('这是关于页')
        res.end('this is about page')
    } else if (url === '/detail') {
        res.write('这是详情页')
        res.end('this is detail page')
    } else {
        res.write('没有这页')
        res.end('no this page')
    }
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})