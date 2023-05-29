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
    if(req.body.name=='卢粲'&&req.body.pwd=='123'){
        res.send('<h1>登陆成功</h1>'+req.body.name)
    }else{
        res.redirect('/login')
    }
    
})

app.listen(80,function(){
    console.log('server @ http://127.0.0.1');
})