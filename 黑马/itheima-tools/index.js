//这是包的入口文件
const date=require('./src/dateFormat')
const escape=require('./src/htmlEscape')


//将方法暴露
module.exports = {
    ...date,   //es6中的展开运算符，将对象的属性展开
    ...escape
}


