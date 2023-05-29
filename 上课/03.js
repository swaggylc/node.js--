// 判断是否是闰年
var n = 2014

if (n % 400 === 0) {
    console.log(n + '是闰年');
} else if (n % 100 !== 0 && n % 4 === 0) {
    console.log(n + '是闰年');
} else {
    console.log(n + '不是闰年');
}