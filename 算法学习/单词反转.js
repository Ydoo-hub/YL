let arr = 'Hello li mou mou';

let arr1 = arr.split(' ');
console.log(arr1)
console.log(arr1.reverse().join(''))

let result = arr1.map(item =>{
    return item.split('').reverse().join('')
}).join(' ');

console.log(arr);
console.log(result);
//match()
