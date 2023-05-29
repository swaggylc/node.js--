const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

var server = http.createServer()
server.on('request', function (req, res) {
    if (req.url === '/') {
        fs.readFile('./01.html', 'utf-8', function (err, data) {
            res.end(ejs.render(data))
        })
    }
})
server.listen(80, function () {
    console.log('server @ http://127.0.0.1');
})