// js中数组的api整理
 //join(), sort(), slice(), splice(), concat(), reverse(), push()+pop(), shift()+unshift(), forEach(), map(), some(), every(), filter(), reduce()+reduceRight(), indexOf()+lastIndexOf(),
 //Array.form(), Array.of(), copyWithin(), find()+findIndex(), fill(), entries()+keys()+values(), includes()


//1.join()
//join(separator): 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。(不改变原数组)

var arr = [1,2,3,4];
console.log(arr.join()); //1,2,3,4
console.log(arr.join("/")); //1/2/3/4

//通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：

function repeatString(str, n) {
    return new Array(n + 1).join(str);
}
console.log(repeatString("abc", 3)); // abcabcabc


//2.sort()
//sort()：按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
//在排序时，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值， sort()方法比较的也是字符串，因此会出现以下的这种情况：

var arr1 = ["d", "a", "c", "b"];
console.log(arr1.sort()); // ["a", "b", "c", "d"]
arr2 = [11, 24, 41, 3];
console.log(arr2.sort()); // [11, 24, 3, 41]
console.log(arr2); // [13, 24, 3, 51](原数组被改变)

// 为了解决上述问题，sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，
//如果第一个参数应该位于第二个之后则返回一个正数。以下就是一个简单的比较函数：

function compare(a, b) {
    return a-b
}
arr2 = [11, 24, 41, 3];
console.log(arr2.sort(compare)); // [3, 11, 24, 41]
// 或者
console.log(arr2.sort((a,b)=>{return a-b}));
// 如果需要通过比较函数产生降序排序的结果，只要交换比较函数返回的值return b-a即可。

// 3.slice()
//slice()：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， 
//slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。
var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-4,-1);
console.log(arr); //[1, 3, 5, 7, 9, 11](原数组不变)
console.log(arrCopy); //[3, 5, 7, 9, 11]
console.log(arrCopy2); //[3, 5, 7]
console.log(arrCopy3); //[3, 5, 7]
console.log(arrCopy4); //[5, 7, 9]

// arrCopy只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。 
// arrCopy2设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。 
// arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。 
// arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。


// 4.splice()
// splice()：很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。
// 删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。
// 插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
// 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。
// 例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。

//splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr); //[5, 7, 9, 11]
console.log(arrRemoved); //[1, 3]
var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); // [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); // []
var arrRemoved3 = arr.splice(1,1,2,4);
console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); //[7]

//5.concat()
//concat() ：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，
//最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。

var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
console.log(arr); // [1, 3, 5, 7](原数组未被修改)

//从上面测试结果可以发现：传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中。
//但是如果传入的是一个二维数组呢？

var arrCopy2 = arr.concat([9,[11,13]]);
console.log(arrCopy2); //[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]); //[11, 13]
//上述代码中，arrCopy2数组的第五项是一个包含两项的数组，也就是说concat方法只能将传入数组中的每一项添加到数组中，
//如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy2中。


//6.reverse()
//push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 
//pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
var arr = ["Lily","lucy","Tom"];
var count = arr.push("Jack","Sean");
console.log(count); // 5
console.log(arr); // ["Lily", "lucy", "Tom", "Jack", "Sean"]
var item = arr.pop();
console.log(item); // Sean
console.log(arr); // ["Lily", "lucy", "Tom", "Jack"]

//8.shift()+unshift()
//shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 
//unshift:将参数添加到原数组开头，并返回数组的长度 。
//这组方法和上面的push()和pop()方法正好对应，一个是操作数组的开头，一个是操作数组的结尾。
var arr = ["Lily","lucy","Tom"];
var count = arr.unshift("Jack","Sean");
console.log(count); // 5
console.log(arr); //["Jack", "Sean", "Lily", "lucy", "Tom"]
var item = arr.shift();
console.log(item); // Jack
console.log(arr); // ["Sean", "Lily", "lucy", "Tom"]

//9.forEach()
//forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。
//参数都是function类型，默认有传参，参数分别为：遍历的数组内容；对应的数组索引，数组本身。
var arr = [1, 2, 3, 4, 5];
    arr.forEach(function(item, index, array){
    console.log(item + '-' + index + '-' + (array === arr));
});
// 输出为：
//1-0-true
//2-1-true
//3-2-true
//4-3-true
//5-4-true

//10.map()
//map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
//下面代码利用map方法实现数组中每个数求平方。
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(item => item*item);
console.log(arr2); //[1, 4, 9, 16, 25]

