// 2. Array Destructuring to Swap Variables

var nums =[1, 2, 3, 4, 5, 6];

/// Long way

// const one =nums[0];
// console.log(one);

// const two =nums[0];
// console.log(two);

/// Array distructing
const [one, two, three, four, five, six] =nums;

console.log(five);




//////////////////
// 2- Using Distructing to swap variables
//////////////////
let name ='john_doe@mail.com';
let email ='John Doe';

[name, email] =[email, name];

console.log('Name : ',name);
console.log('Email : ',email);