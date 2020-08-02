// 1.思路：定义一个新数组，并存放原数组的第一个元素，然后将原数组的项和新数组的元素一一对比，若不同则存放在新数组中。

function unique(arr){
    var res = [arr[0]];
    for(var i=1; i<arr.length; i++){
     var repeat = false;
     for(var j=0; j<res.length; j++){
      if(arr[i] === res[j]){
       repeat = true;
       break;
      }
     }
     if(!repeat){
      res.push(arr[i]);
     }
    }
    return res;
   }
   console.log('------------方法一---------------');
   console.log(unique([1,1,2,3,5,3,1,5,6,7,4]));

// 2.思路二：先将原数组排序，在与相邻的进行比较，如果不同则存入新数组。

function unique2(arr){
    var arr2 = arr.sort();
    var res = [arr2[0]];
    for(var i=1; i<arr2.length; i++){
     if(arr2[i] !== res[res.length-1]){
      res.push(arr2[i]);
     }
    } 
    return res;
   }
    console.log('------------方法二---------------');
   console.log(unique2([1,1,2,3,5,3,1,5,6,7,4]));

// 3.思路三：利用对象属性存在的特性，如果没有该属性则存入新数组。

function unique3(arr){
    var res = [];
    var obj = {};
    for(var i=0; i<arr.length; i++){
     if( !obj[arr[i]] ){
      obj[arr[i]] = 1;
      res.push(arr[i]);
     }
    } 
    return res;
   }
   console.log('------------方法三---------------');
   console.log(unique3([1,1,2,3,5,3,1,5,6,7,4]));

// 4.思路四：利用数组的indexOf下标属性来查询。
function unique4(arr){
    var res = [];
    for(var i=0; i<arr.length; i++){
     if(res.indexOf(arr[i]) == -1){
      res.push(arr[i]);
     }
    }
    return res;
   }
   console.log('------------方法四---------------');
   console.log(unique4([1,1,2,3,5,3,1,5,6,7,4]));

// 5.思路五：利用数组原型对象上的includes方法。

function unique5(arr){
    var res = []; 
    for(var i=0; i<arr.length; i++){
     if( !res.includes(arr[i]) ){ // 如果res新数组包含当前循环item
      res.push(arr[i]);
     }
    }
    return res;
   }
   console.log('------------方法五---------------');
   console.log(unique5([1,1,2,3,5,3,1,5,6,7,4]));

// 6.思路六：利用数组原型对象上的 filter 和 includes方法。

function unique6(arr){
    var res = [];
    res = arr.filter(function(item){
     return res.includes(item) ? '' : res.push(item);
    });
    return res;
   }
   console.log('------------方法六---------------');
   console.log(unique6([1,1,2,3,5,3,1,5,6,7,4]));
 
// 7.思路七：利用数组原型对象上的 forEach 和 includes方法。

function unique7(arr){
    var res = [];
    arr.forEach(function(item){
     res.includes(item) ? '' : res.push(item);
    }); 
    return res;
   }
   console.log('------------方法七---------------');
   console.log(unique7([1,1,2,3,5,3,1,5,6,7,4]));







