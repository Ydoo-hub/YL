// 第一题
// var lines = [12,123,123,333,445,565,786,987];
// // var array =[];
// // for(var i =0;i<lines.length;i++){
// //     if(!array.includes(lines[i])){
// //         array.push(lines[i])
// //     }
// // }
// // console.log(array)
//
//
// // var n = parseInt(readline());
// var ans = 0;
// var num = 0;
// var array = [];
// var n = 8;
// for(var i = 0;i < n; i++){
//     // lines = readline().split(" ");
//     if(!Array.isArray(lines)){
//         return
//     }
//     for(var i =0;i<lines.length;i++){
//         if(!array.includes(lines[i])){
//             array.push(lines[i])
//         }
//     }
//     console.log(lines);
//     console.log(array);
//     for(var j = 0;j < array.length; j++,num=0){
//         for(var k = 0;k < lines.length;k++){
//             if(array[j] === lines[k]){
//                 num++;
//             }
//         }
//         console.log(num)
//
//     }
// }
// console.log(ans);


// var n = parseInt(readline());
var ans = 0;
var n = 8;
var lines = [12,123,123,360,445,565,786,987,786,786];
var num = 0;
var array = [];
for(var i = 0;i < n; i++){
    // lines = readline().split(" ");

    for(var i =0;i<lines.length;i++){
        if(!array.includes(lines[i])){
            array.push(lines[i])
        }
    }

    for(var j = 0;j < array.length; j++){
        for(var k = 0;k < lines.length;k++){
            if(array[j] == lines[k]){
                num++;
            }
        }
        var a = num/n
        if( a > 0.01 ){
            ans++;
        }
        num = 0;
    }
}
console.log(ans);

// e em eh hs s 
