// 取出100-999的水仙花数
for (i = 100; i < 999; i++) {
    var a = Math.floor(i / 100)
    var b = Math.floor(i % 100 / 10)
    var c = i % 100 % 10
    if (
        i === Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)
    ) {
        console.log(i + ',');
    }
}