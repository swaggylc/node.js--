const fs=require('fs')
var data='hello world'
fs.writeFile('1.txt',data,'utf8',function(err){
    if(err){
        console.log('文件写入错误：'+err.message);
    }
})
fs.readFile('1.txt','utf-8',function(err,dataStr){
    if(err){
        console.log('文件读取失败:'+err.message);
    }else{
        console.log(dataStr);
    }
})