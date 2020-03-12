/// remove items from Left / Right side of array

var nums =[20, 5, 99, 672, 32];

var removeFromLeft =nums.slice(0, 2);
console.log(removeFromLeft); /// [20, 5]

/// start at 2nd index
var removeFromRight =nums.slice(2);
console.log(removeFromRight); /// [99, 672, 32]

getNthItem =(arr, num) => arr.slice(num - 1, num)[0];

const result =getNthItem(nums, 3);
console.log(result); /// 99


///// FINISH THE LESSON ...