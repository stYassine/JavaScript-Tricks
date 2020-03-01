/// Prevent Object properties from being deleted
let person ={
    id: 1,
    name: 'Yassine',
    age: 25,
    address: {
        country: 'Morroco',
        city: 'Mohammedia'
    }
};

console.log(Object.getOwnPropertyDescriptors(person));

/// Now we are unable to ADD or DELETE a Property on this Object
Object.seal(person);

/// configurable is now set to false
console.log(Object.getOwnPropertyDescriptors(person));