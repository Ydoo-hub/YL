//正则表达式 匹配 替换 提取

// 利用RegExp对象来创建 正则表达式

var regexp = new RegExp(/123/);
console.log(regexp);

//2 利用字面量创建 正则表达式
console.log('2---------------------------')
var rg = /123/;

// 3 利用test() 正对象方法，判断是否符合正则表达式的规范
console.log('3---------------------------')

console.log(rg.test(123))
console.log(rg.test("abc"))

//4 特殊字符 （ 元字符 ）
console.log('4---------------------------')
//边界符 $
var a = /asd/;
console.log(a.test('asd'));  //true
console.log(a.test('asda'));  //true
console.log(a.test("asdd"));    //true
console.log('---------------------------')

var b = /^asd/;  //只能是asd开头
console.log(b.test("asd"));   // true
console.log(b.test("aasd"));   //false
console.log(b.test("asdd"));    //true
console.log('---------------------------')

var c = /^asd$/; //精确匹配，只能是asd 也就是asd开头 asd结尾
console.log(c.test("asd"));   // true
console.log(c.test("aasd"));   //false
console.log(c.test("asdd"));    //false
console.log('---------------------------')

var d = /asd$/; //只能是asd结尾
console.log(d.test("asd"));   // true
console.log(d.test("aasd"));   //true
console.log(d.test("asdd"));    //false
console.log('---------------------------')

// []
var e = /[abc]/;      //只要有abc 其中一个就可以匹配成功
console.log(e.test('andy'));  //true
console.log(e.test('baby'));  //true
console.log(e.test('green'));  //false

console.log('---------------------------')

var f = /^[abc]$/;  //三选一 只要是a  或者是 b  或者是 c 这三个字母就返回 true
console.log(f.test('a6666d')) // false
console.log(f.test('a555a'))   //flase
console.log(f.test('v555c'))   //flase
console.log(f.test('cccc'))   //flase
console.log(f.test('bbbb'))   //flase
console.log(f.test('aaaa'))   //flase

console.log(f.test('a')) // true
console.log(f.test('c'))   //true
console.log(f.test('b'))   //true
console.log('1---------------------------')


//[-]

var g = /^[a-z0-9_]$/;  //a-z 只要是a-z 这26个字母就返回 true
console.log(g.test('x')) // true
console.log(g.test('y'))   //true
console.log(g.test('b'))   //true
console.log(g.test('Y'))   //false
console.log(g.test(1))   //false

console.log('---------------------------')

//字符组合
var g = /^[a-zA-z0-9]/;  //a-z 只要是a-z A-Z

console.log(g.test('yaaa'))   //true
console.log(g.test('---db'))   //false
console.log(g.test('Ysss'))   //true
console.log(g.test("1asd1asd"))   //true

console.log('---------------------------')

//^  取反，里面的东西不能包含

var i = /^[^a-zA-z0-9-_]/;  //a-z 只要是a-z A-Z

console.log(i.test('a'));   //false
console.log(i.test('A'));   //false
console.log(i.test('0'));   //false
console.log(i.test('-'));   //false
console.log(i.test('_'));   //false
console.log(i.test('*'));   //true


//量词符 用来设定某个模式出现次数
console.log('量词符-------------------------------')
//* 可以出现>=0次
console.log('量词符   *')
var j = /^a*$/;
console.log(j.test(''));  //true
console.log(j.test('a'));  //true
console.log(j.test('aa'));  //true

//+ 可以出现>=1次
console.log('量词符   +')
var k = /^a+$/;
console.log(k.test(''));  //flase
console.log(k.test('a'));  //true
console.log(k.test('aa'));  //true

//? 可以出现 0 || 1 次
console.log('量词符   ?')
var l = /^a?$/;
console.log(l.test(''));  //true
console.log(l.test('a'));  //true
console.log(l.test('aa'));  //false

//{3}就是重复三次var
console.log('量词符  {}')
var l = /^a{3}$/;  //只能3次，多也不行少也不行
console.log(l.test(''));  //false
console.log(l.test('a'));  //false
console.log(l.test('aaa'));  //true


//{3, } 大于等于三
console.log('量词符  {X，}');
var m = /^a{3,}$/;  //大于等于3次
console.log(m.test(''));  //false
console.log(m.test('a'));  //false
console.log(m.test('aaa'));  //true
console.log(m.test('aaaa'));  //true


//{3,16} 大于等于三 小于等于16
console.log('量词符  {X，X}');

var n = /^a{3,}$/;  //大于等于3次
console.log(n.test(''));  //false
console.log(n.test('a'));  //false
console.log(n.test('aaa'));  //true
console.log(n.test('aaaaaaaaa'));  //true

//测试
console.log('测试');
let cad = /^[0-9a-zA-Z-_]{6,12}$/;
console.log(cad.test("Ydoo-009"));
let cd = /^[0-9a-zA-Z-_]{6,12}$/;          //{6,12} 之间不能有空格 有空格会报错
console.log(cd.test("Ydoo-009"));


//////

var aasa;
console.log(aasa);
console.log(asdsaaaaa);
