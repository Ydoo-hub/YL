//类的声明
function Animal () {
    this.name = 'name';
}
//ES6中的class的声明
class Animal2 {
    constructor () {
        this.name = "name";
    }
}
console.log(Animal);
console.log(Animal2);

/*
*   实例化类的对象
*
* */
/* new 后面括号没有参数的话可以不用带上（）*/
console.log(new Animal());
console.log(new Animal2());

/*
*  借助构造函数实现继承
*
* */
function parent1() {
    this.people = 'Yes'
}
parent1.prototype.say = function(){
    //这个东西放在父类原型对象上的，子类用 构造函数实现继承 的方式拿不到
    console.log('父类上的原型对象上的方法是不会被继承的');
};
function chirl1() {
    parent1.call(this); //apply,原理就是，改变 this 指向
    this.type = 'child';
}

console.log(new chirl1()); //log不出 say方法，证明这个继承是没办法全部继承，只能是部分继承
                           // 如果说，父类的属性都在构造函数上那没问题，要是在原型上就拿不到了
                           //子类是拿不到父类原型对象里面的方法的

/*
* 借助原型链实现继承
*（弥补上面借助构造函数实现继承的不足）
* */

function parent2() {
    this.people = 'yes';
    this.play = {
        hello: 'hello',
        hi: 'hi'
    }
}
var s = new parent2()


parent2.prototype.say = function () {
    console.log('借助原型来实现继承，可以获取到父类的原型上的say函数')
}
function child2() {
    this.type = 'child2'
}

child2.prototype = new parent2() //child2的原型指向parent2的实例，也就是在child2上有parent2上的一系列东西，
                                 // 也可以通过这指向parent2的原型，从而拿到parent2原型上的东西
                                 // 在parent2的原型中中加入一个say函数看看继承后能不能拿到
console.log('-------------------------')
console.log(new child2());
console.log(new child2().__proto__);
console.log(new child2().__proto__.__proto__);
console.log(new child2().__proto__.__proto__.say());
console.log(new child2().say());
console.log(child2.prototype.__proto__.say());
/*
* 缺点来了
*   s1.s2 ： s1 对 父类上的属性进行修改，s2和他继承同一个，导致s2 的父类属性也被修改啦
*
* */

var s1 = new child2();
var s2 = new child2();

s1.play.hey = 'hey';

console.log(s1)
console.log(s2)

console.log(s1.__proto__)
console.log(s2.__proto__)

/*
* 组合方式 解决上面的不足
*
* */
function Parent3() {
    this.name = 'parent3';
    this.play2 = {
        hello: 'hello',
        hi: 'hi'
    }
}
function Child3() {
    Parent3.call(this);
    this.type = 'Child3';
}
Child3.prototype = new Parent3();

var s3 = new Child3();
var s4 = new Child3();

s3.play2.hey = 'hey';
console.log(s3)
console.log(s4)
// console.log(s4.__proto__)

//上面这种方法用了两次Parent3


/*
* 组合优化方式1
*
* */
function Parent4() {
    this.name = 'parent4';
    this.play4 = {
        hello: 'hello',
        hi: 'hi'
    }
}
function Child4() {
    Parent4.call(this);
    this.type = 'Child4';
}
Child4.prototype = Parent4.prototype;  //两者共用了一个原型对象，所以判断不出究竟是new C 还是 new P

var s5 = new Child4();
var s6 = new Parent4();

s5.play4.hey = 'hey';
console.log(s5);
console.log(s6);
console.log(s6 instanceof Child4,s6 instanceof Parent4); // true true 说明是同一个
console.log(s5.constructor);  //输出parent4
console.log(s6.constructor);  //输出parent4


/*
* 组合优化方式2
*
* */
function Parent5() {
    this.name = 'parent5';
    this.play5 = {
        hello: 'hello',
        hi: 'hi'
    }
}
function Child5() {
    Parent5.call(this);
    this.type = 'Child5';
}
Child5.prototype = Object.create( Parent5.prototype);//Object.create创建一个中间对象，中间对象的原型对象是父类的原型对象
//下面只要对子类的原型对象做修改，就可以区分出来了
Child5.prototype.constructor = Child5;
var s7 = new Child5();
var s8 = new Parent5();
console.log(s7 instanceof Child5,s7 instanceof Parent5);//true true
console.log(s7.constructor); // Child5
console.log(s8.constructor); // Parent5
console.log(s8.__proto__.constructor.constructor); // Parent5
