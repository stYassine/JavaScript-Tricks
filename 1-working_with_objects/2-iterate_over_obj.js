let person ={
    id: 1,
    name: 'Yassine',
    age: 25
};

/// the down side of for in IS:
/// it will iterate over object Including it's Prototype
/// solution
/// iterate over properties we defined no prototype
for(let item in person){
    if(person.hasOwnProperty(item)){
        // console.log(item, person[item]);
    }
}


/// 2-Approach
for(let item of Object.keys(person)){
    // console.log(item);
}


/// 3- ES7 feature
/// it will create array of arrays each contains Key & value of the Object
/// & add ES6 array destructing
Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
});