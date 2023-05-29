// 2.	找出1000以内的完全数。完全数：该数的因子（不包含本身）之和等于其本身
for (var i = 1; i <= 1000; i++) {
    var sum = 0
    //j--除数 从1开始 
    for (var j = 1; j < i; j++) {
        //如果取余0  是因数 
        if (i % j === 0) {
            sum = sum + j
        }
    }
    if (sum == i) {
        console.log(i)
    }
}