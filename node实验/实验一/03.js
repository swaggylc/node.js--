// 3.	编写一个程序，定义一个数组，包含10个整数，并实现将其中最大的数与最小的数对换
var arr = [2, 5, 4, 60, 25, 1, 7, 8, 30, 22]
var max = Math.max(...arr)
var min = Math.min(...arr)
let i = arr.indexOf(max)
let j = arr.indexOf(min)
arr[i] = min
arr[j] = max
console.log(arr);

