var usernames =['Jeff', 'James', 'Erick', 'James'];


/// 1-
var filterdUsernames =usernames.filter((name, index, array) => array.indexOf(name) === index ? name : '' );
console.log(filterdUsernames);


/// 2-
var set1 =new Set([1, 2, 2, 3]);
console.log(set1);

var set2 =new Set(usernames);
console.log(set2); /// not an array
console.log(Array.isArray(set2));


/// return an array
var set3 =[...new Set(usernames)];
console.log(set3);
