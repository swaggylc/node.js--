const express=require('express')
const ejs=require('ejs')
const bodyParser=require('body-parser')
var fs=require('fs')
var app=express()

app.get('/login',function(req,res){
    fs.readFile('login.html','utf-8',function(err,data){
        res.end(ejs.render(data))
    })
})
app.get('/register',function(req,res){
    fs.readFile('register.html','utf-8',function(err,data){
        res.end(ejs.render(data))
    })
})
app.post('/login',function(req,res){
    res.send('<h1>已登陆</h1>')
})

app.listen(80,function(){
    console.log('server @ http://127.0.0.1');
})