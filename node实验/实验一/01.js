// 1.	给定一个1000以内正整数N，输出其所有因子
var n=14
let arr=[]
for(i=1;i<n;i++){
    if(n%i===0){
        arr.push(i)
    }
}
console.log(arr);