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
// const sqlStr = 'select * from student'
// client.query(sqlStr, (err, results) => {
//     if (err) {
//         //查询数据失败
//         return console.log(err.message)
//     }
//     //查询数据成功。
//     //注意：如果执行的是 select 语句，则返回的是一个对象数组
//     console.log(results)
// })

// 5.查询需要的数据(查询输出软件学院年龄大于20的学生姓名、性别)
// const sqlStr1 = 'select * from student where age>? '
// client.query(sqlStr1, [20], (err, results) => {
//     if (err) {
//         //查询数据失败
//         return console.log(err.message)
//     }
//     //查询数据成功。
//     //注意：如果执行的是 select 语句，则返回的是一个对象数组
//     console.log(results)
// })

// 6.插入一条数据(本人信息)
// 向 student 表中新增一条数据
// const user = {
//     idnum: 2020213130,
//     name: '卢粲',
//     xueyuan: '软件学院',
//     age: 22,
//     gender: '男'
// }
// //定义待执行的 sql 语句
// const sqlStr = 'insert into student (idnum,name,xueyuan,age,gender) values (?,?,?,?,?)'  // ? 占位符进行占位
// //执行 sql 语句
// client.query(sqlStr, [user.idnum, user.name, user.xueyuan, user.age, user.gender], (err, results) => {
//     if (err) {
//         //执行 sql 语句失败
//         return console.log(err.message)
//     }
//     //执行 sql 语句成功
//     //注意：如果执行的是 insert into 插入语句，则 results 是一个对象
//     //可以通过 affectedRows 属性，来判断是否插入成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功')
//     }
// })

// 7.修改（更新）信息
//演示如何更新用户的信息
// const user = { xueyaun: '女子学院', gender: '女' }
// // //定义待执行的 sql 语句
// const sqlStr = 'update student set xueyuan=? where gender=?'
// //执行 sql 语句
// client.query(sqlStr, [user.xueyaun, user.gender], (err, results) => {
//     if (err) {
//         //执行 sql 语句失败
//         return console.log(err.message)
//     }
//     //注意：执行 update 语句之后，返回的也是一个对象，可以通过 affectedRows 属性，来判断是否更新成功
//     // 此处更新多个数据，所以affectedRows为2
//     console.log(results.affectedRows);
// }) 

// 8.删除数据
//删除 id 为5的数据
// 定义待执行的 sql 语句(删除年龄大于30的学生信息)
const sqlStr = 'delete from student where age>?'
//执行 sql 语句
client.query(sqlStr, 30, (err, results) => {
    if (err) {
        //执行 sql 语句失败
        return console.log(err.message)
    }
    console.log(results.affectedRows);
})