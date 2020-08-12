// https://zhuanlan.zhihu.com/p/38427755
// 深拷贝
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);

// https://www.cnblogs.com/echolun/p/7889848.html

// 浅拷贝

var obj = { a: {a: "kobe", b: 39} };
var initalObj = Object.assign({}, obj);
initalObj.a.a = "wade";
console.log(obj.a.a); //

// 注意：当object只有一层的时候，是深拷贝

let obj = {
    username: 'kobe'
 };
 let obj2 = Object.assign({},obj);
 obj2.username = 'wade';
 console.log(obj);//{username: "kobe"}

 
// https://www.jianshu.com/p/35d69cf24f1f



