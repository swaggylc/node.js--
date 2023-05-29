const express = require('express')
const app = express()


//导入路由模块
const router = require('./37.创建API路由模块')

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//一定要在路由之前配置 cors 中间件，解决接口跨域问题
const cors=require('cors')
app.use(cors())



//注册路由模块
app.use('/api', router)



app.listen(80, (req, res) => {
    console.log('http://127.0.0.1')
})