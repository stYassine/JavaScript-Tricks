let numbers =[100, 67, 90, 10, 5];

/// splice returns the values it removed
/// splice mutates the original array

/// remove all items
// let sliced =numbers.splice();

/// remove single item (from index, till)
// let slices2 =numbers.splice(0, 2);

let str ='Hello World'.split('');

str.splice(0, 1);
str.splice(str.length - 1, 1);
str =str.join('');

// console.log(str);




/// 2- filter doesn't modify the original array
let items =[1, 2, 3, 5, 6, 7, 8];

// let filteredItems =items.filter((e) => e > 5);
/// remove filtered items
// let filteredItems =items
//     .filter((e) => e > 5)
//     .map((item) => {
//         items.splice(items.indexOf(item), 1);
//         return item;
//     });




//// abstract inside a function
function removeItems(arr, func){
    return arr
        .filter(func)
        .map((el) => {
            arr.splice(arr.indexOf(el), 1);
            return el;
        });
}

let result =removeItems(items, (num) => num > 5);

console.log('Filtered : ', result);
console.log('Original : ', items);