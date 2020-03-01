let str ="hello world";


function capitalizeEachWord(str){
    let words =str.split(' ').map((e) => e[0].toUpperCase()+e.slice(1)).join(' ');

    return words;
}

console.log(capitalizeEachWord(str));