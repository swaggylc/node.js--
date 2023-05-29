//在外界使用 require 导入一个自定义模块时，得到的成员
//就是在那个模块中，通过 module.exports 指向的对象

const custom = require('./17.自定义模块')
console.log(custom)