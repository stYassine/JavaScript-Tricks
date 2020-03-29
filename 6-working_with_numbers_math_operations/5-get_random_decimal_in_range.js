/// get random decimal in a range
// 2, 10 -> 6.242345

/// 1-
var result =Math.random() * (10 - 2) - 2;
console.log(result);



/// abstract function
function getRandomDecimal(min, max){
    return Math.random() * (max - min) - min;
}
console.log(getRandomDecimal(100, 20));