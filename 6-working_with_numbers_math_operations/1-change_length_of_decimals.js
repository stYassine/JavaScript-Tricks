/// Change the length of decimels
// 1.234 -> 1.2
// 1.234 -> 1.23

/// 1- toFixed will return a string wrap in Number()
let deci1 =1.234;
deci1 = deci1.toFixed(1);

console.log(deci1); /// 1.2

// 2- toPercesion
let deci2 =11.234;

console.log(deci2.toPrecision(3)); /// 11.2
console.log(deci2.toPrecision(2)); /// 11