const fs = require('fs')
var newObj = { "name": '王二麻子', "ages": 22 }
fs.readFile('1.json', function (err, dataStr) {
    if (err)
        throw err
    var str = JSON.parse(dataStr.toString())
    str.push(newObj)
    var newStr=JSON.stringify(str)
    fs.writeFile('1.json',newStr,function(err){
        if(err)
        throw err
        console.log('数据写入成功');
    })
})