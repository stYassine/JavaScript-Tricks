/// make a range of numbers as an array


var range =Array.from({length: 5}, (value, index) => index + 1);
/// multiply by 2 || 5
var range2 =Array.from({length: 5}, (value, index) => index * 2);
/// create binary pattern
var range3 =Array.from({length: 5}, (value, index) => index % 2);

console.log(range); /// [ 1, 2, 3, 4, 5 ]
console.log(range2); /// [ 1, 2, 3, 4, 5 ]
console.log(range3);