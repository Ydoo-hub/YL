//定义类型
var A;
//A = 1 这个时候就会报错 ，判断到A的那个不是字符串
A = 'hello tsc'; //这个时候定义就没问题 
var input = document.querySelectorAll('input');
var button = document.querySelector('button');
button.onclick = function () {
    console.log("点击了");
    var result = Number(input[0].value) + Number(input[1].value);
    alert(result);
};
