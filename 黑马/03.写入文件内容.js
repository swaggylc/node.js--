//1.导入fs模块，来操作文件
const fs=require('fs')

//2.调用fs.writeFile（）方法,写入文件内容
//  参数1：文件的路径
//  参数2：写入文件的内容
//  参数3：回调函数

fs.writeFile('./files/2.txt','Hello node.js',function(err){
    //2.1写入成功则 err 的值为 null
    //   写入失败则 err 的值为 错误对象
    //console.log(err)
    if(err){
        return console.log('文件写入失败！'+err.message)
    }
    console.log('文件写入成功！')
    
})