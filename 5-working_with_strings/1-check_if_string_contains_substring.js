var url ="http://api.github.com/users/stYassine";

/// method 1
let containsWord1 =url.includes('github');
let containsWord2 =url.startsWith('github');
let containsWord3 =url.endsWith('ine');

console.log(containsWord3);