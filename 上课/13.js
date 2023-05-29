const express=require('express')
var app=express()
// app.use(function(req,res){
//     console.log(req.url);
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end('<h1>HELLO EXPRESS</h1>')
// })
app.get('/',function(req,res){
    res.send('<h1>这里是首页</h1>'+req.url)
})
app.get('/login',function(req,res){
    res.send('<h1>这里是登陆页</h1>')
})
app.listen(80,function(){
    console.log('server @ http://127.0.0.1');
})