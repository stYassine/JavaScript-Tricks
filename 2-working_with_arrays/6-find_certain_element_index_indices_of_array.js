let people =['Yassine', 'Chris', 'James', 'Paul', 'Mary', 'Chris'];
// let people =[
//     {name: 'Yassine'}, 
//     {name: 'Chris'}, 
//     {name: 'James'}, 
//     {name: 'Paul'}, 
//     {name: 'Mary'},
//     {name: 'Chris'}, 
// ];

/// 1- return the element
// let result =people.find((elem) => elem === 'Paul');
// console.log(result); /// Paul


// let result =people.find((elem) => elem.name ==='Paul');
// console.log(result);


/// 2- return the index
let result =people.findIndex((elem) => elem.name =='Paul');
// console.log(result);


/// abstract
function findAllIndices(arr, val){
    let indices =[];
    arr.forEach((e, i) => {
        if(e === val){
            indices.push(i);
        }
    });

    return indices;
}
let result2 =findAllIndices(people, 'Chris');
console.log(result2);