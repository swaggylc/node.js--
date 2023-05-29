const express=require('express')
const ejs=require('ejs')
const bodyParser=require('body-parser')
var fs=require('fs')
var app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.get('/login',function(req,res){
    fs.readFile('login.html','utf-8',function(err,data){
        res.end(ejs.render(data))
    })
})

app.post('/login',function(req,res){
    console.log(req.body);
    res.send('<h1>已登陆</h1>')
    
})
app.get('/register',function(req,res){
    fs.readFile('register.html','utf-8',function(err,data){
        res.end(ejs.render(data))
    })
})

app.post('/register',function(req,res){
    console.log(req.body);
    var str = JSON.stringify(req.body)
    fs.writeFile('1.json',str, function (err) {
        if (err) throw err;
        console.log("数据写入成功！");
    });
    res.send('<h1>已注册</h1>')
    
})
app.listen(80,function(){
    console.log('server @ http://127.0.0.1');
})