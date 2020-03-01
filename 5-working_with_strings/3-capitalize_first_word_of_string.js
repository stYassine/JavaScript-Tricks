let str ="hello world";

/// Method 1
function capitalizeFirst(str){
    // return str[0].toUpperCase() + str.slice(1);
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

// console.log(capitalizeFirst(str));



/// Method 2
function capitalizeFirst2([first, ...rest]){
    return first.toUpperCase()+rest.join('');
}
console.log(capitalizeFirst2(str));