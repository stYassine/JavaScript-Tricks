let person ={
    id: 1,
    name: 'Yassine',
    age: 25,
    address: {
        country: 'Morroco',
        city: 'Mohammedia'
    }
};

/// 1-
/// return TRUE or FALSE if property exists
var name ='name' in person;
// console.log(name);

/// 2- check for nested property
var city ='city' in person.address;
// console.log(city);


//// 3- can access Object prototype
// let objConstruct ='constructor' in person; true
// let objToString ='toString' in person; true

/// 4- solution
let objConstruct =person.hasOwnProperty('toString');
console.log(objConstruct);