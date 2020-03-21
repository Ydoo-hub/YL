//1
var a={} ,b ='123',c = 123;
a[b] = 'b';  //对象中key值 数字123和字符串"123" 是同一个
a[c] = 'c';  //所以 a[c] 将  a[b] 覆盖了
console.log(a[b])  //c

//2
var a={} ,b =Symbol('123'),c = Symbol(123);
//Symbol 创建出来的的值是唯一的           NaN!==NaN(这个也是唯一的)
//typeof Symbol('asd')  =>"symbol"
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);

//3
var a={} ,b ={key:'123'},c = {key:'456'};
a[b] = 'b';
a[c] = 'c';
console.log(a[b]) ; //c
//1.对象（数组）属性名不能是一个对象（遇到对象属性名会转化成字符串）
//obj={}  arr =[123,321] obj[arr] = 'y' obj=>{'123,321':y}
//2.普通对象.toString()，调取的是Object。prototype上的方法（这个是根据数据类型检测的）
//obj={}  obj.toString => "[object Object]"
//obj[b] = 'b' => obj["[object Object]"] = 'b'
