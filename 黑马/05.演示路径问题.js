
//出现路径拼接的问题，一般是出现了以./或../开头的相对路径
//将相对路径换成绝对路径（完整的文件存放路径）即可解决



// const fs=require('fs')
// fs.readFile('files/1.txt','utf8',function(err,dataStr){
//     if(err){
//         return console.log('读取文件失败！'+ err.message)
//     }
//     console.log('读取文件成功！'+ dataStr)
// })


//移植性差，不利于维护
const fs=require('fs')
// fs.readFile('D:\\node.js基础\\黑马\\files\\1.txt','utf8',function(err,dataStr){
//     if(err){
//         return console.log('读取文件失败！'+ err.message)
//     }
//     console.log('读取文件成功！'+ dataStr)
// })


// __dirname 表示文件当前所处的路径
fs.readFile(__dirname+'/files/1.txt','utf8',function(err,dataStr){
     if(err){
         return console.log('读取文件失败！'+ err.message)
     }
    console.log('读取文件成功！'+ dataStr)
 })