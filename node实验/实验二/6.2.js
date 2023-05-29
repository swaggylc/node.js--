const fs = require('fs');
fs.readFile('person.json', function (err, data) {
    if (err) throw err;
    // console.log(data.toString())
    var person = JSON.parse(data.toString());//将字符串转换为JSON对象
    //对JSON数据进行处理
    for (var i = 0; i < person.length; i++) {
        console.log('姓名：' + person[i].name + '     年龄：' + person[i].ages);
    }
});
