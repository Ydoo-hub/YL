//第一种方式：字面量

var o1 = {name:'o1'};
var o2 = new Object({name: 'o2'});

//第二种方式：通过构造函数

var M = function (name) {
    this.name = name;
};
var o3 = new M('o3')


//第三种方法:Object.create
var p = {name:"p"};
var o4 = Object.create(p);


console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);


console.log(M.prototype);
console.log(M.prototype.constructor);
console.log(M.prototype.constructor === M);

console.log(o3.__proto__);
console.log(o3.__proto__ === M.prototype);

M.prototype.say = function () {
    console.log("say hi");
};
var o5 = new M('o5');
var o6 = new M('o6');

console.log(o5.say());
console.log(o6.say());

console.log(o3 instanceof M);
console.log(o3 instanceof Object);
console.log(o3.__proto__ === M.prototype);
console.log(M.prototype.__proto__ === Object.prototype);

console.log(M === o3.__proto__.constructor);
console.log(Object === o3.__proto__.constructor);


/*new*/
