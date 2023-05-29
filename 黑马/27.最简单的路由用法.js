//导入 express 模块
const express=require('express')

const app=express()

app.get('/',(res,req) => {
    req.send('Holle World')
})


app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})