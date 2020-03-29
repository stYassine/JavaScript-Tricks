/// Get random integer in a range
/// 2 to 10 ---> something in between like 5 or 7

/// 1-
var result1 =Math.round(Math.random() * (10 - 2) + 2 ); /// inclusive of min and max ( can include 2 & 10 )
var result2 =Math.floor(Math.random() * (10 - 2) + 2 ); /// inclusive of min ( can include 2 )
var result3 =Math.ceil(Math.random() * (10 - 2) + 2 ); /// inclusive of max ( can include 2 )

console.log(result1);
console.log(result2);
console.log(result3);


/// create abstract function
function getRandomInt(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomInt(100, 1000));