function abc(){
    console.log("我是ABC函数的执行输出")
}
console.log("开始")
setTimeout(function(){
    console.log("异步执行")
},0)
console.log("中间")
setTimeout(function(){
    abc()
},0)
console.log("结束")
