//1.导入fs模块
const fs=require('fs')
//2.读取文件的成绩
fs.readFile('./files/成绩.txt','utf8',function(err,dataStr){
//3.判断文件是否读取成功
if(err){
    return console.log('文件读取失败！'+ err.message)
}
// console.log('文件读取成功！'+ dataStr)

// 4.1把成绩的数据进行分割

const arrOld=dataStr.split(' ')

// console.log(arrOld)
// 4.2循环分割后的数组，把每一个数据进行符号的替换
const arrNew=[]
arrOld.forEach(item=>{
    arrNew.push(item.replace('=','：'))
})
// console.log(arrNew)

const newStr=arrNew.join('\r\n')
console.log(newStr)

// 4.3将替换后的数据合并成新的字符串

//5.调用fs.writeFile方法，将处理好的数据写入到新文件中
fs.writeFile('./files/成绩整理-ok.txt',newStr,function(err){
    if(err){
        return console.log('写入文件失败！'+err.message)
    }
    console.log('文件写入成功！')
})
})