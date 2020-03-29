/// measure time it takes to run function

var getUserData = async () => await fetch('https://api.github.com/users/stYassine');

var time = fn => {
    console.time('time');
    let result =fn();
    console.timeEnd('time');
    return result;
}

time(() => getUserData());


/// pass args

var getUserData2 = async (user) => await fetch(`https://api.github.com/users/${user}`);

var time2 = (fn, ...args) => {
    console.time('time');
    let result =fn(...args);
    console.timeEnd('time');
    return result;
}

time2(() => getUserData2('stYassine'));