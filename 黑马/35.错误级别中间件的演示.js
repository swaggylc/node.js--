const express = require('express')
const app = express()

//注意：错误级别中间件必须注册在所有路由之后！！！


//1.定义路由
app.get('/', (req, res) => {
    //1.1人为的制造错误
    throw new Error('服务器内部发生了错误')
    res.send('Home Page')
})

//2.定义错误级别中间件
app.use(function(err,req,res,next){
    //能够 get 到上方的错误信息
    console.log('发生了错误！'+err.message)
    res.send('ERROR:'+err.message)
})


app.listen(80, () => {
    console.log('http://127.0.0.1')
})