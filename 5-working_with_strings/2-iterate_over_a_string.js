let str ='Hello World';

/// Method 1
for(let i =0; i < str.length; i++){
    // console.log(str[i]);
}

/// Method 2
for(let i in str){
    // console.log(str[i]);

    // console.log(str.charAt(i));
}


/// Method 3
for(let s of str){
    // console.log(s);
}


/// in case of an array
let str2 =['H','e','l','l','o',' ','W','o','r','l','d'];

/// Method 4
for(let [i,s] of str2.entries()){
    console.log(i,s);
}