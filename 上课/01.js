//  取出三位数的个位，十位，百位
 
 var num=476

 var a=Math.floor(num/100)

 var b=Math.floor(num%100/10)

 var c=num%100%10


 console.log(a,b,c);