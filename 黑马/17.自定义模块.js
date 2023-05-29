//在一个自定义模块中，默认情况下 module.exports = {}

//向 module.exports 对象上挂载一个 usename 属性
module.exports.usename = 'zhangsan'

//向 module.exports 对象上挂载一个 sayHello 方法
module.exports.sayHello = function () {
    console.log('Hello')
}
const age = 21
module.exports.age = age

//使用 require 方法导入一个模块时，
//导入的结果，永远以 module.exports 指向的对象为准
//让 module.exports 指向一个全新的对象

module.exports = {
    nickname: 'lisi',
    sayHi() {
        console.log('Hi')
    },
    add(a,b){
        return a+b
    },
    jianfa(a,b){
        return a-b
    }
}