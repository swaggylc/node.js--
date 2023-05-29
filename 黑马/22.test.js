//导入时间格式化的模块
const time=require('./21. dataFormat 格式化时间方法')

//调用方法进行时间的格式化
const dt=new Date()
// console.log(dt)
const newTime=time.dateFormat(dt)
console.log(newTime)