// 准备两个文件person1.json、person2.json，内容和person,json类似，
// 编程将这两个文件内容读出，并合并写入person3.json
const fs = require('fs');
fs.readFile('person1.json', function (err, data) {
    if (err) throw err;
    var person1 = JSON.parse(data.toString());//将字符串转换为JSON对象
    var str1 = JSON.stringify(person1); //将JSON对象转换成字符串重新写入JSON文件中
    fs.readFile('person2.json', function (err, data) {
        if (err) throw err;
        var person2 = JSON.parse(data.toString());//将字符串转换为JSON对象
        var str2 = JSON.stringify(person2); //将JSON对象转换成字符串重新写入JSON文件中
        var str = []
        for (i = 0; i < person1.length; i++) {
            str.push(person1[i])
        }
        for (j = 0; j < person2.length; j++) {
            str.push(person2[j])
        }

        var str3 = JSON.stringify(str)
        fs.writeFile('person3.json', str3, function (err) {
            if (err) throw err;
            console.log("数据写入成功！");
        });
    });
});

