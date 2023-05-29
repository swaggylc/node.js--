const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    //定义一个包含中文内容的字符串
    const str = `您请求的URL地址为${req.url},您请求的类型为${req.method}`

    //调用 res.setHeader 方法,设置 Content-Type 相应头，编码格式为utf-8
    res.setHeader('Content-Type', 'text/html;charset=utf-8')

    //调用 res.end() 方法，将字符串响应给客户端
    res.end(str)
    
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})  