let arr = 'Hello li mou mou';

let arr1 = arr.split(' ');

let result = arr1.map(item =>{
    return item.split('').reverse().join('')
}).join(' ');

console.log(arr);
console.log(result);
//match()
