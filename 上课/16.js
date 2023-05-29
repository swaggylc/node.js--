const express=require('express')
const ejs=require('ejs')

var fs=require('fs')
var app=express()
app.use('/public/',express.static('./public/'))
app.get('/display',function(req,res){
    fs.readFile('./views/display.html','utf-8',function(err,data){
        res.end(ejs.render(data))
    })
})


app.listen(80,function(){
    console.log('server @ http://127.0.0.1');
})
