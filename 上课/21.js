/**
 * 产生get请求后再执行查询数据库语句，这样重定向时就不会出现查询不到数据的情况
 * 若先查询数据库再产生get请求，重定向时会出现查询不到数据的情况(无法查询到新数据)
 * 
 */

const express = require('express')
const bodyParser = require('body-parser')
var app = express()
const fs = require('fs')
const ejs = require('ejs')
app.use(bodyParser.urlencoded({ extended: false }))
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

app.get('/', function (req, res) {
    // 4.执行数据库操作,初始查询数据
    const sqlStr = 'select * from student'
    client.query(sqlStr, (err, results) => {
        if (err) {
            //查询数据失败
            return console.log(err.message)
        }
        fs.readFile('./readMySql.html', 'utf-8', function (err, data) {
            res.end(ejs.render(data, {
                students: results
            }))
        })
    })
})


// 添加数据的页面
app.get('/add', function (req, res) {
    fs.readFile('./add.html', 'utf-8', function (err, data) {
        res.end(ejs.render(data))
    })

})
// 响应来自 add.html 的 post 请求
app.post('/addStu', function (req, res) {
    // console.log(req.body.stuName);
    // 插入数据
    //定义待执行的 sql 语句
    const sqlStr = 'insert into student (idnum,name,xueyuan,age,gender) values (?,?,?,?,?)'  // ? 占位符进行占位
    //执行 sql 语句
    client.query(sqlStr, [req.body.stuId, req.body.stuName, req.body.stuSchool, req.body.stuAge, req.body.stuSex], (err, results) => {
        if (err) {
            //执行 sql 语句失败
            return console.log(err.message)
        }
        res.redirect('/')
    }
    )
})

// 删除数据
app.get('/delStu', function (req, res) {
    // console.log(req.query.id);
    //删除 id 为5的数据
    //定义待执行的 sql 语句
    const sqlStr = 'delete from student where id=?'
    //执行 sql 语句
    client.query(sqlStr, req.query.id, (err, results) => {
        if (err) {
            //执行 sql 语句失败
            return console.log(err.message)
        }
        //注意：执行 delete 语句之后，返回的也是一个对象，可以通过 affectedRows 属性，来判断是否删除成功
        if (results.affectedRows === 1) {
            res.redirect('/')
        }
    })
})

// 修改数据
app.get('/updateStu', function (req, res) {
    // console.log(req.query.id);
    const sqlStr1 = 'select * from student where id = ? '
    client.query(sqlStr1, req.query.id, (err, results) => {
        if (err) {
            //查询数据失败
            return console.log(err.message)
        }
        // console.log(results);
        fs.readFile('./update.html', 'utf-8', function (err, data) {
            res.end(ejs.render(data,{
                // 注意：results 是一个数组，所以要通过 results[0] 来获取对象
                student: results
            }))
        })
    })

})
// 响应来自 update.html 的 post 请求
app.post('/update', function (req, res) {
    // console.log(req.body, req.query.id);
    // 修改数据
    // //定义待执行的 sql 语句
    const sqlStr = 'update student set id=?,idnum=?,name=?,xueyuan=?,age=?,gender=? where id=?'
    // 执行 sql 语句
    client.query(sqlStr, [req.body.id,req.body.stuId,req.body.stuName, req.body.stuSchool,req.body.stuAge,req.body.stuSex,req.body.id], (err, results) => {
        if (err) {
            //执行 sql 语句失败
            return console.log(err.message)
        }
        res.redirect('/')
    })


})















app.listen(80, function () {
    console.log('server @ http://127.0.0.1');
})








