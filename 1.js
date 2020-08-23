// call 和 apply 有什么区别，那个性能更好一点
// call 和 apply 都是function原型上的方法，而每一个方法作为原型上的实例，所以可以调取原型上的call 和 apply，call 和 apply 都是用来改变this指向的，让函数执行，同时改变指向，call 传参的时候是一个一个传的，apply 要求要传入的参数以数组的形式一次性传入
// （还有一个类似的，bind也可以改变指向，但不是立即执行，只是预先出去改变this ）
// call 的性能比 apply 性能 好一点，尤其是在传递的参数超过3个的时候

// call 传参的时候是一个一个传的
fn.call( obj,10,20,30 );
// apply 要求要传入的参数以数组的形式一次性传入
fn.apply( obj, [10,20,30] );

// 注意下面的例子
let  arr =  [ 10,20,30 ];
      obj = { }
function fn( x,y,z ) { }
fn.apply( obj,arr ); // => x =10 y = 20 z =30
fn.call ( obj,arr ); // => x = [ 10,20,30 ] y = z =undifined
fn.call ( obj,...arr ); // => x =10 y = 20 z =30（es6张展开运算符）

// =>自己实现性能测试，任何代码的测试结果都与测试环境有关（比如cpu，内存，gpu等），不同浏览器性能也不一样
// 方法一：(“蠢方法”)
let  t = new Date();
for(let i =1 ; i<10000;i++){  }
console.log( new Date() - t);
// 方法二：
console.time( ' A ' );
for(let i =1 ; i<10000;i++){  }
console.timeEnd(' A ');

// 实现 （5).add(3).minus(2), 使其输出结果为 ：6

// arr.push() ；之所以可以push()；
// 因为：arr是Array的实例，可以调用Array.prototype上的方法，而push就是其中一个方法

~function(){
// 每一个方法执行都要返回Number这个类的实例，这样才可以继续调用Number类中的方法
// （也就是：链式写法）

function check(n){
n = Number(n)
return isNaN(n) ? 0 : n ;
}

function add(n){
n = check(n)
return this + n;
}
function minus(n){
n = check(n)
return this - n;
}
// 一：
Num.prototype.add = add;
Num.prototype.add = minus;
// 二：
["add","minus"].forEach(item =>{
Number.prototype[item] = evel(item)
})
}();

// 箭头函数和普通函数的区别

// 1.，箭头函数写法更加简介，它是es6新增的
// 2 ，箭头函数没有自己的指向，它里面的this是继承函数所处上下文中的this（使用call /apply 等任何方式都无法改变this的指向）
// 3 ，箭头函数中没有argument（类数组），只能基于...arg获取传递的参数集合（数组）
// 4 ，箭头函数不能被new执行，因为箭头函数没有this，也没有prototype，所以就也没有constrcutor，没有constrcutor话就不能通过实例对象找到构造函数
function fn(x) {
return function (y) {
return x + y
}
}
let fn = x => y => x + y ;

let obj = {
name :'OBJ '
};

function fn1(){
console.log(this)
}
fn1.call(obj); // obj

let fn2 = () =>{
console.log(this)
}
fn2.call(obj) // windows




document.body.onclick = () => {
// => this:windows 不是当前操作的body了
}

document.body.onclick = function ()  {
// => this:body
//arr.sort ( function(a,b) {
////=>this 指向 windows 回调函数的 this 一般都是Windows
//return a - b;
//})
//将 return 的函数改为箭头函数，箭头函数继承上下文
arr.sort ((a,b) => {
//=>回调函数 this 继承上下文，也就是指向body 
})
}



let fn = (...arg)=>{
console.log(argument) //报错了
console.log(...arg) //打印出来了，而且是个数组
}
fn( 10, 20, 30)

function fn(){
this.x =100
}
fn.prototype.getX = function(){
console.log( 'f 可以打印出来')
}
let f = new fn;  // 普通函数可以被当作类，可以new出来一个实例


let fn = () =>{
this y  = 200;
} 
let f = new Fn;  //箭头函数不能被当作类，不i能被new出来一个实例



//回调函数，把一个函数B作为实参传给另外一个函数A,在执行函数A的时候，
//可把传进来的函数B给执行了（可以执行n次，可以传值，可改this）
function each(arr,callback) {
    for (let i = 0;i<arr.length;i++){
        callback(arr[i],i) //指向windows   第一个callback
        callback.call(arr,arr[i],i);//指向arr，利用call改变this指向   第二个callback
    }
}
each([10,20,30,40],function(item,index){
    // => this 对应第一个callback 指向windows
    console.log(this);
    // => this 对应第二个callback 指向 arr
    // console.log(this);
    return false;
});
// each([10,20,30,40],function(item,index){
//     // => this 对应第二个callback 指向 arr
//     console.log(this);
// });