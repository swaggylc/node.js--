function readfile(){
    console.log('数据读完了');
}
function a(readfile){
    console.log('主函数开始');
    setTimeout(() => {
        readfile()
    }, 0);
    console.log('主函数结束');
}
a(readfile)
