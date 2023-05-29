//1.导入http模块
const http = require('http')

//2.创建web服务器实例
const server = http.createServer()

//3.为服务器绑定 request 事件，监听客户端的请求
server.on('request',function(req,res){
    console.log('有人访问了web服务器！')
})

//4.启动服务器
server.listen(8080,function(){
    console.log('服务器启动 at http://127.0.0.1:8080')
})