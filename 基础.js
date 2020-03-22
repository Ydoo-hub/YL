/*
*  在输入框中如何判断输入的是一个正确的网站，例如：用户输入一个字符串，验证是否符合url格式
*
* */

let str = "https://www.baidu.com.cn/index?x=100&y=300#qwe";
//用正则写url表达式
let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
//=> url 格式
//1.协议：http https  ftp
//2.域名 www.zbaidu.com www.****.cn  kbs.sports.qq.com  kbs.sport.qq.con
//3.请求路径 /index.html  /stu/index.html
//          /stu/
//4.问号传参  ?****=***&***=****
//5.哈希值  #****

console.log(reg.exec(str));


console.log('----------------------------------------------------')
//普通函数
function foo() {

    foo.a = function () {    //私有属性中有a了，下面调用的时候先看私有属性有没有，没有的话再去原型链上找
        console.log(1)
    };

    this.a = function () {
        console.log(2)
    }
}

// =>把foo当作类，在foo的原型上加上 公有 属性方法，实例的时候可以调用 => .a();
foo.prototype.a = function () {
    console.log(3)
};

//把foo当作普通对象，设置私有属性方法 => foo.a();
foo.a = function () {
    console.log(4)
};

foo.a();   //4

let obj = new foo();  //创建实例之后，foo.a = 1 (覆盖了对象4那个属性)  this.a =2 ;obj调用foo ，所以this指向obj
obj.a();   //2   //这里是foo里面的 this.a  obj调用了 .a() 方法；
foo.a();   //1    //创建实例之后，foo.a = 1 (覆盖了对象4那个属性)

console.log('----------------------------------------------------')


