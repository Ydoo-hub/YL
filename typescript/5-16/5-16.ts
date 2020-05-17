//定义类型
var Aaa: string;
//A = 1 这个时候就会报错 ，判断到A的那个不是字符串
Aaa = "tsc" //这个时候定义就没问题 


var input = document.querySelectorAll('input');
var button = document.querySelector('button');

button.onclick = function(){
    console.log("点击了")
    var result:number = Number(input[0].value)+Number(input[1].value);
    alert(result);
}