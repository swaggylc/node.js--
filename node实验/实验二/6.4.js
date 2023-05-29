// 编写一个程序读出person.json文件，将姓名为“李四“的数据删除，
// 将姓名为“刘强”的年龄改为100，最后写回到person.json中去
const fs = require('fs');
fs.readFile('person.json', function (err, data) {
    if (err) throw err;
    // console.log(data.toString())
    var person = JSON.parse(data.toString());//将字符串转换为JSON对象
    //对JSON数据进行处理

    for (var i = 0; i < person.length; i++) {
        if (person[i].name === '刘强') {
            person[i].ages = 100
        }
    }

    for (var i = 0; i < person.length; i++) {
        if (person[i].name === '李四') {
            person.splice(i, 1)
        }
    }


    var str = JSON.stringify(person); //将JSON对象转换成字符串重新写入JSON文件中
    fs.writeFile('person.json', str, function (err) {
        if (err) throw err;
        console.log("数据写入成功！");
    });
});