const express=require('express')

const app=express()

//1.导入路由模块
const userRouter=require('./29.router')
//2.注册路由模块

//注意：app.use() 的作用就是用来注册全局中间件
//添加访问前缀
app.use('/api',userRouter)

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})