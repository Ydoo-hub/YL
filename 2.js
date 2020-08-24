// 如何把一个字符串的大小取反（大写变小写，小写变大写）例如‘aBC’ -> 'Abc'
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

// 在长字符串S中寻找短字符串T (如果不使用indexOf/include等内置方法，你会如何处理)
~ function () {
    // 循环原始字符终中的每一项 ，让每一项从当前位置向后截取T.length个字符，和t进行比较
    // 如果不一样就继续循环,如果一样放回当前索引（结束循环）
    function myIndexOf1(T) {
        let lenT = T.length;
        let lenS = this.length;
        if(lenT > lenS){
            return -1
        }
        let res = -1;
        for(let i = 0;i < lenS-lenT+1 ;i++){
            if(this.substr(i, lenT) === T ) {
                res = i;
                break;
            }
        }
        return res;
    }



    function myIndexOf2 (T){
        let reg =new RegExp(T);
        let res = reg.exec(this);
        return res ===  null ? -1 :res.index;
    }
    
    
    String.prototype.myIndexof1 = myIndexOf1;
    String.prototype.myIndexof2 = myIndexOf2;
}();

let S = "zhufengpeixun";
let T = "pei";
console.log(S.myIndexof1(T));
console.log(S.myIndexof2(T));

//var regexp = new RegExp(/123/);
//var regexp = new RegExp(T);           //不加 / / ，  T的话就是指上面的let T

