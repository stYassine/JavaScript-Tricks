/// Merge multiple Objects
var defaultPerson ={
    name: '',
    email: '',
    subscribed: true
}

var actualPerson ={
    name: 'John Doe',
    email: 'john_doe@gmail.com'
}
var userPhone ={
    phone: '0612327643'
}


/// Order Matter
/// last object overrides previous properties

/// 1-
var person =Object.assign(defaultPerson, actualPerson, userPhone);
// console.log(person);


/// 2- ES7 approach
let person2 ={...defaultPerson, ...actualPerson, ...userPhone};
console.log(person2);