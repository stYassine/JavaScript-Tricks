/// Delete or Filter property of an Object
let person ={
    first: 'Yassine',
    last: 'Msiah'
}

/// instead of this
// delete person.last;
// console.log(person);

let filteredObject ={}

let first =Object.keys(person)
    .filter(key => key != 'last')
    .map((key) => filteredObject[key] =person[key]);

// console.log(filteredObj);


/// 2- abstract
function filterObject(obj, prop){
    let filteredObj ={}
    Object.keys(obj)
        .filter((key) => key != prop)
        .map((key) => filteredObj[key] =obj[key]);

    return filteredObj;
}
console.log(filterObject(person, 'last'));