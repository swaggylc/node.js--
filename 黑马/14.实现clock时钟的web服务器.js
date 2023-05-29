//1.导入需要的模块
const http = require('http')
const fs = require('fs')
const path = require('path')

//2.1创建基本的 web 服务器
const server = http.createServer()

//2.2监听 web 服务器的 request 请求
server.on('request', (req, res) => {
    //3.将资源请求的 url 地址映射为文件的存放路径
    //3.1获取到客户端请求的 URL 地址
    const url = req.url
    // /clock/index.html
    // /clock/index.css
    // /clock/index.js

    //3.2把请求的 URL 地址映射为具体的文件存放路径。  注意：此时js文件与html等文件在同一级目录下
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '/clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }

    // const fpath = path.join(__dirname, url)

    //4.1根据映射的文件路径读取文件
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        //4.2读取失败则响应固定的失败消息
        if (err) {
            return res.end('404 not found')
        }
        //4.3读取成功则响应对应的页面内容
        res.end(dataStr)
    })
})

//2.3启动web服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})

//4.读取文件的内容并响应给客户端
//5.优化资源的请求路径

