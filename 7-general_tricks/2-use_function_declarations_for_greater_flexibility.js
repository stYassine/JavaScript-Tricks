/// Hoisting
// only works with ( var )
// let, const throws an error

/// hoisting on functions
logPerson('Yassine');

function logPerson(name){
    console.log(name);
}