//1.1导入fs模块
const fs = require('fs')
const { link } = require('fs/promises')

//1.2导入path模块
const path = require('path')

//1.3定义正则表达式，匹配<style></style>,<script></script>
// \s 表示空白字符，\S 表示任意的非空白字符，* 表示匹配任意次数
const regStyle =/<style>[\s\S]*<\/style>/
const regScript =/<script>[\s\S]*<\/script>/

//2.1读取需要处理的html文件
fs.readFile(path.join(__dirname,'/node.js—资料/day1/素材/index.html'),'utf-8',function(err,dataStr){

//2.2文件读取失败
    if(err){
        return console.log('文件读取失败！'+err.message)
    }

//2.3文件读取成功，则调用三个方法拆解html，css，js文件
// console.log('读取成功！'+dataStr)
resolveCSS(dataStr)
resolveJS(dataStr)
resolveHTML(dataStr)
})


//3.1定义处理CSS的resolveCSS方法
function resolveCSS(htmlStr){

//3.2使用正则表达式提取所需要的内容
    const r1 = regStyle.exec(htmlStr)

//3.3将提取出来的样式字符串，进行replace替换操作
    const newCSS = r1[0].replace('<style>',' ').replace('</style>',' ')
    // console.log(newCSS)

//3.4调用fs.writeFile()方法将提取的字符串写入clock文件夹的index.css中
fs.writeFile(path.join(__dirname,'/node.js—资料/day2/素材/clock/index.css'),newCSS,function(err){
    if(err){
        return console.log('写入CSS样式失败！'+err.message)
    }
    console.log('写入CSS样式成功！')
})
}

//4.1定义处理JS的resolveJS方法
function resolveJS(htmlStr){

    //4.2使用正则表达式提取所需要的内容
        const r2 = regScript.exec(htmlStr)
    
    //4.3将提取出来的样式字符串，进行replace替换操作
        const newJS = r2[0].replace('<script>',' ').replace('</script>',' ')
        // console.log(newJS)
    
    //4.4调用fs.writeFile()方法将提取的字符串写入clock文件夹的index.js中
    fs.writeFile(path.join(__dirname,'/node.js—资料/day2/素材/clock/index.js'),newJS,function(err){
        if(err){
            return console.log('写入JS样式失败！'+err.message)
        }
        console.log('写入JS样式成功！')
    })
}

//5.1定义处理html结构的方法
function resolveHTML(htmlStr){

//5.2调用字符串替换方法，将内嵌的style和script替换为外联的link和script标签
const newHTML=htmlStr.replace(regStyle,'<link rel="stylesheet" href="index.css">')
    .replace(regScript,'<script src="index.js"></script>')

    fs.writeFile(path.join(__dirname,'/node.js—资料/day2/素材/clock/index.html'),newHTML,function(err){
        if(err){
            return console.log('写入HTML失败！'+err.message)
        }
        console.log('写入HTML样式成功！')
    })
}
