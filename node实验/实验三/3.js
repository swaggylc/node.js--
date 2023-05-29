const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (req, res) => {
    //1.获取请求的url地址
    const url = req.url
    if (url === '/index' || url === '/') {
        fs.readFile('./index.html', function (err, data) {
            //2.设置 Content-Type 响应头，防止中文乱码
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(data)
        })
    } else if (url === '/login') {
        fs.readFile('./login.html', function (err, data) {
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(data)
        }
        )
    } else if (url === '/register') {
        fs.readFile('./register.html', function (err, data) {
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(data)
        }
        )
    } else if (url === '/img') {
        fs.readFile('../../上课/bg.jpg', function (err, data) {
            res.setHeader('Content-Type', 'image/jpeg')
            res.end(data)
        }
        )
    }
    else {
        res.write('没有这页')
        res.end('no this page')
    }
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})