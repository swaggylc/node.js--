const fs = require('fs')
var sum = 0
fs.readFile('1.json', function (err, dataStr) {
    if (err)
        throw err

    var str = JSON.parse(dataStr.toString())
    for (var i = 0; i < str.length; i++) {
        console.log('姓名：' + str[i].name +'---'+ '年龄：' + str[i].ages);
        sum = sum + str[i].ages
    }
    console.log('年龄总和为：'+sum);
})
