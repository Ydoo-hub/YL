//在长字符串S中寻找短字符串T (如果不使用indexOf/include等内置方法，你会如何处理)
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

let S = "zhegezhendhenhaowan";
let T = "hen";
console.log(S.myIndexof1(T));
console.log(S.myIndexof2(T));

//var regexp = new RegExp(/123/);
//var regexp = new RegExp(T);           //不加 / / ，  T的话就是指上面的let T

