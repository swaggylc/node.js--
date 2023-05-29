const express=require('express')
var app=express()
var userrouter=require('./routers/userRouter')
app.use(userrouter)
app.listen(80,function(){
    console.log('server @ http://127.0.0.1');
})
