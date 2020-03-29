/// Fixing Math Errors with Deccimals
// .1 + .2 === 0.30000000000000004


/// 1- Solution will return a string wrap in Number()
console.log(Number((.1 + .2).toFixed(1))); /// 0.3
console.log(Number((.1 + .2).toFixed(2))); /// 0.30

/// 2- EPSILON
var result =(.1 + .2) - .3;
console.log(result < Number.EPSILON); /// true


//// 3- 
var result2 =Math.round((.1 + .2) * 10) / 10;
console.log(result2); /// 0.3