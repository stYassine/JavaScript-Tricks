/// Prevent Object Properties from being changed at all
let person ={
    id: 1,
    name: 'Yassine',
    age: 25,
    address: {
        country: 'Morroco',
        city: 'Mohammedia'
    }
};

console.log(
    Object.getOwnPropertyDescriptors(person)
);


//// Freeze the Object, make it impossible to add, modify or delete Properties of the object
Object.freeze(person);

/// enumerable means it is possible to Iterate over the properties
console.log(
    Object.getOwnPropertyDescriptors(person)
);

/// these operations will not work anymore
person.name ='Paul';
person.sex ='Male';
delete person.id;