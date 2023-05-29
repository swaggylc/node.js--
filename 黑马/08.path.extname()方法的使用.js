const path = require('path')

//定义文件的存放路径
const epath = 'a/b/c/d/index.html'
const extName = path.extname(epath)
console.log(extName)