// 1. Private Data using IIFEs or Block Scope



/// Use IIFE or Block scope ( W/ let / const ) to hide / expose data
function getUserData(){
    let name ='John';
    let email ='john_doe@mail.com';
    let password ='123456';

    return {
        name, 
        email, 
        password
    }
}


// console.log(getUserData());
/// access vars
console.log(getUserData().name);


/// you can immediatly call it
var getUserData2 =(function(){
    let name ='John';
    let email ='john_doe@mail.com';
    let password ='123456';

    let data ={
        name, 
        email, 
        password
    }
    console.log(data);
})();


/// Es6 Block Scope
{
    let name2 ='John';
    let email2 ='john_doe@mail.com';
    let password2 ='123456';
    
    let sayHi =() =>`Hello ${name2}`
    
    /// Let & Const are bound to the scope that their in

    /// with data public with var
    /// with keyword var we can pass data outside of the scope
    var result ={
        name2, email2, password2, sayHi
    };

}
// console.log(name2); //// undefined

console.log(result);

console.log(result.sayHi());

