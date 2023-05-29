//1.导入 mysql 模块
const mysql = require('mysql')

//2.建立与 mysql 数据库的联系
const client = mysql.createPool({
    host: '127.0.0.1', //数据库的 ip 地址
    user: 'root', //登陆数据库的账号
    password: 'admin123', //登陆数据库的密码
    database: 'my_db_01' //要操作哪个数据库
})

// 3.检测是否连接成功
client.getConnection(function (err, connection) {
    if (err) {
        console.log('连接失败:' + err.message);
    }
    else {
        console.log('连接数据库成功');
    }
})

// 4.执行数据库操作
const sqlStr = 'select * from student'
client.query(sqlStr, (err, results) => {
    if (err) {
        //查询数据失败
        return console.log(err.message)
    }
    //查询数据成功。
    //注意：如果执行的是 select 语句，则返回的是一个对象数组
    // console.log(results)


    const http = require('http')
    const fs = require('fs')
    const ejs = require('ejs')
    var server = http.createServer()

    server.on('request', function (req, res) {
        if (req.url === '/') {
            fs.readFile('./readMySql.html', 'utf-8', function (err, data) {
                res.end(ejs.render(data, {
                    students: results
                }))
            })
        }
    })
    server.listen(80, function () {
        console.log('server @ http://127.0.0.1');
    })

})






