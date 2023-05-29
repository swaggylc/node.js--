function abc() {
    console.log('我是abc函数的输出');
}
console.log('开始');
setTimeout(() => {
    console.log('异步执行');
}, 0);
console.log('中间');
setTimeout(() => {
    abc()
}, 0);
console.log('结束');