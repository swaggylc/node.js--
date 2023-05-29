const express=require('express')

var app=express()

app.get('/user/:uid',function(req,res){
    console.log(req.params);
    res.send(req.params)
})
app.get('/login',function(req,res){
    console.log(req.query);
})

app.listen(80,function(){
    console.log('server @ http://127.0.0.1');
})
