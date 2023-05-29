//1.导入 express 模块
const express = require('express')

//2.创建 web 服务器
const app = express()

//在这里调用 express.static() 方法，快速对外提供静态资源
//如果要托管多个静态资源目录，请多次调用 express.static() 方法
//访问静态资源时，express.static() 方法会根据目录添加顺序来查找所需要的文件
//如果在托管的静态资源访问路径之前，挂载路径前缀，可使用以下方法
app.use('./files',express.static('./files'))
app.use(express.static('./clock'))


//3.启动 web 服务器
app.listen(80, () => {
    console.log('express server running @ http://127.0.0.1')
})


//将 node app.js 替换为 nodemon 即可自动重启服务器 