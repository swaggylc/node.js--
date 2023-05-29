const itheima=require('./itheima-tools')

//格式化时间的功能
const dtStr=itheima.dateFormat(new Date())
console.log(dtStr)

console.log('------------')

const htmlStr='&lth1 title=&quotabc&quot&gt这是h1标签&ltspan&gt&ampnbsp&lt/span&gt&lt/h1&gt'

const str=itheima.htmlUnEscape(htmlStr)
console.log(str)
