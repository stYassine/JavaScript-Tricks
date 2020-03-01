let person ={
    id: 1,
    name: 'Yassine',
    age: 25
};


let arr =[];


/// 1-
Object.keys(person).forEach((key) => arr.push([key, person[key]]) );
// console.log(arr);


/// 2-
/// the map function returns an array by default
let result =Object.keys(person).map((key) => [key, person[key]] );
// console.log(result);


/// 3-
console.log(Object.entries(person));