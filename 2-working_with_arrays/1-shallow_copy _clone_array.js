console.log('Pssssss');

/// 1-
let fruits =['Apple', 'Banana'];

/// the array isn't being copied it's been passed by reference
let newFruits =fruits;
/// this mutates the original array
newFruits.push('Orange');


// console.log(fruits);
// console.log(newFruits);


/// 2-First method to copy an array
let fruits2 =fruits.slice();
fruits2.push('Pears');

// console.log(fruits2);



/// 3-second method
let fruits3 =[].concat(fruits);
fruits3.push('Cherries');


// console.log(fruits);
// console.log(fruits3);


/// 4- ES6 way
// let fruits4 =['Water Melon', ...fruits]; /// or can be added in the begining
let fruits4 =[...fruits, 'Water Melon'];


console.log(fruits);
console.log(fruits4);