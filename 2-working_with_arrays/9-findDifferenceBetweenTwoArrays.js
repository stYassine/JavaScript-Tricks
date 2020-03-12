var arr1 =['James', 'Paul', 'Chris'];
var arr2 =['James', 'Paul', 'Jack'];

const result =arr1.filter(el => arr2.includes(el) );
console.log(result); /// ['James','Paul']


/// not a shared value
const result2 =arr1.filter(el => !arr2.includes(el) );

console.log(result2);


/// [...'Chris', 'Chris']
const result3 =[...new Set(arr1)].filter(el => !arr2.includes(el));