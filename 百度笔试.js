var a = [2,6,1,0,3];
var n = a.length;
let res = 1;
let resurt;
var Sec = function (n,a) {
    let max = a[0];
    let index = 0;
    for(let i =1 ; i<n; i++){
        if(a[i] > max ){
            max = a[i];
            index = i
        }
    }
    if(max<8){
        return 0;
    }
    console.log(index)
    return index;
};
function main() {
    let index = Sec(n,a);
    if (!a[index]){
        resurt = 1;
        return;
    }
    if(a[index] < n){
        console.log("结束了");
        resurt =  res;
        return;
    }
    for(let i= 0;i<n;i++){
        if(i == index){
            a[i] = a[i] - n;
        }else {
            a[i] = a[i] + 1;
        }
    }
    res++;
    console.log(res,a);
    console.log("------------------------------------------")
    main()
}
main();

console.log("结果---"+ resurt )
