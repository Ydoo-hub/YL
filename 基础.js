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
