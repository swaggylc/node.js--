const fs = require('fs');
var newobj = { "name": "刘强", "ages": 21 }
fs.readFile('person.json', function (err, data) {
    if (err) throw err;
    var person = JSON.parse(data.toString());//将字符串转换为JSON对象
    person.push(newobj);//将新的对象加到数组对象中
    var str = JSON.stringify(person); //将JSON对象转换成字符串重新写入JSON文件中
    fs.writeFile('person.json', str, function (err) {
        if (err) throw err;
        console.log("数据写入成功！");
    });
});
