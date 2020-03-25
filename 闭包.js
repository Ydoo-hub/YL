// // 1.自定义函数（命名函数）
// function fn(){}
//
// // 2.函数表达式
// var fun = function () {
//
// }
//
// //3.利用new Function('参数1','参数2'，‘参数3’)
// var f = new Function ('console.log(aaaaa)');
//
// //4.所有的函数都是 Function 的实例对象
//
//
//
//
// //调用方法
// //1.普通函数
// function fn1() {}
// function fn() {
//     console.log('1');
//     fn1()
// }
// fn();     //window
//
// //2.对象方法
// var o = {
//     a : function () {
//         console.log('2')
//     }
// }
// o.a();    //o
//
// //3.构造函数
// function f1() {
//
// };
// var a = new f1();      //a
//
// //4.绑定事件
// btn.onclick = function () {
//     console.log('4')
// };     //btn
//
// //5.定时函数
// setInterval(function () {
//     console.log('5')
// },10000)     //wndow
//
// //6.立即执行函数 ,自动调用的
//     (function () {
//         console.log('6')
//     })();      //window



var arr = [1,2,66,99,700,20,60000];
console.log(Math.max(1,2,666));
console.log(Math.max.apply(null,arr));


var o = {
    a:0
}
function fn(a,b) {
    console.log(this+"---"+(a+b));
}
var f = fn.bind(o,1,2);   //bind 返回一个函数 f
f();


//闭包 ：有权访问另一个函数作用域中的变量函数。
//简单的说就是，一个作用域访问另外一个函数内部的局部声明
function f1() {
    var num = 10;
    function f2() {
        console.log(num)
    }
    f2();
}
f1();

//闭包2
