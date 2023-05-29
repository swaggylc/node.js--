//定义格式化时间方法
function dateFormat(dtStr){
    const dt=new Date(dtStr)

    const y=dt.getFullYear()
    const m=padZero(dt.getMonth()+1)
    const d=padZero(dt.getDay())

    const hh=padZero(dt.getHours())
    const mm=padZero(dt.getMinutes())
    const ss=padZero(dt.getSeconds())

    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
}


//进行补零操作
function padZero(n){
    return n > 9 ? n :'0'+n
}

//将方法暴露
module.exports={
    dateFormat
}