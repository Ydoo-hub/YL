let str = "zhulaoshiShiGEDAshABI,对的！！zanTONG";
str = str.replace(/[a-zA-Z]/g,content=>{
    //=>content 就是每次匹配到的结果
    //验证是否为大写字母：把字母转化成大写后和原来对比，一样的话原来就是大写，不一样则是小写
    // content.toLowerCase() === content?
    //或者使用ASCII的大写字母的取值范围进行判断A-65 Z-90
    //content.charCodeAt()>=65&&content.charCodeAt()<=90
    //'A'.charCodeAt() 可以查看ASCII的值


    return content.toLowerCase() === content? content.toUpperCase():content.toLowerCase();


})
console.log('A'.charCodeAt());

console.log('Z'.charCodeAt());

console.log('z'.toUpperCase());

console.log('A'.toLowerCase());

console.log(str)
