function main(info, cb) {
    console.log('孩子，快回家吧');
    setTimeout(function () {
        cb(info);//调用回调函数  
    }, 0)
}
function sendMsg(msg) {  //我是回调函数
    for (var i = 0; i < 10; i++) {
        console.log("我在工作 ")
    }
    console.log(msg);
}
main('我到家了！', sendMsg);//执行主函数
console.log("妈妈去做其他事")
