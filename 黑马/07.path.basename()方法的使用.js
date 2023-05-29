const path = require('path')

//定义文件的存放路径
const fpath = 'a/b/c/d/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

// 第二个参数可清除文件的扩展名
const nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt)
