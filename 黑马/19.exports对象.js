
const usename='wangwu'

exports.usename=usename

exports.age=22

exports.sayHello=function(){
    console.log('Hello')
}

//最终向外共享的结果，永远指向 module.exports 的对象