// 数组的一些方法
var arr = []
var sum = 0
var points = 0
for (let i = 0; i < 7; i++) {
    arr[i] = parseInt(Math.random() * 10)
}
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(arr);
sum = sum - Math.max(...arr) - Math.min(...arr)
points = sum / (arr.length - 2)
console.log('均值'+points);