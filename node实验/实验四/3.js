const http = require('http')
const fs = require('fs')
const ejs = require('ejs')
http.createServer(function (req, res) {
    // 读取ejs文件
    fs.readFile('03.ejs', 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(ejs.render(data))
    })
}).listen(80, function () {
    console.log('@http://127.0.0.1');
})