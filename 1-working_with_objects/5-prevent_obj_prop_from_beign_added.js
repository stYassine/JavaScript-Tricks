let person ={
    id: 1,
    name: 'Yassine',
    age: 25,
    address: {
        country: 'Morroco',
        city: 'Mohammedia'
    }
};


let props =Object.getOwnPropertyDescriptors(person);
// console.log(props); /// Check if obj values are writeable


/// prevent adding properties to this object
Object.preventExtensions(person);

person.sex ='Male';

console.log(person);

/// Check if Object is extensible
console.log(Object.isExtensible(person));