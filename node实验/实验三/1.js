var http=require('http')
var server=http.createServer()
server.on('request',function(req,res){
    console.log('本次url地址为：'+req.url);
    console.log('收到了请求');
    res.write('hello')
    res.write('node.js')
    res.end('this is end')
})
server.listen(80,function(){
    console.log('服务器启动成功，在浏览器输入：http://127.0.0.1');
})