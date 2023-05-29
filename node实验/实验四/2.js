const http = require('http')
const fs = require('fs')
const ejs = require('ejs')
var server = http.createServer()
server.on('request', function (req, res) {
    if (req.url === '/') {
        fs.readFile('./02.html', 'utf-8', function (err, data) {
            var s = '软件学院'
            var i = true
            var stus = [
                {
                    name: '张三', age: 20
                }, {
                    name: '李四', age: 10
                },
                {
                    name: '王五', age: 40
                }
            ]
            res.end(ejs.render(data,{
                students:stus
            }))
        })
    }
})
server.listen(80, function () {
    console.log('server @ http://127.0.0.1');
})