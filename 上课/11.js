const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
    //1.获取请求的url地址
    const url = req.url

    //3.判断用户请求的页面是否为 '/' 或 '/index.html' 首页
    if (url === '/' || url === '/index.html') {
        fs.readFile('./index.html', function (err, data) {
            res.end(data.toString())
        })
    }

    //4.判断用户请求的页面是否为 '/about.html' 关于页面
    else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }

    //5.设置 Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')


})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})