//// fill array with values
/// foreach of item in the array we want to change it a given number

let numbers =[1, 3, 10, 88, 100, 5];

let phoneNumber ='555-525-5252';
let newNumber =phoneNumber.split('').filter(num => num != '-');

/// replace item - start- till
// console.log(newNumber.fill('*', 0, 3));
console.log(newNumber.fill('*', 0, 3).join(''));