/// Debounce Function
/// A function that, when called, can only be called after a certain amount of time has passed

/// higher order function: is functions that takes onother function
var debounce =(fn, ms) => {
    let timeout;

    return function(){
        clearTimeout(timeout);
        timeout =setTimeout(() => fn(), ms)
    }
}

var onResize =() => {
    console.log(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', debounce(onResize, 500));





//// if you want to pass args
var debounce2 =(fn, ms) => {
    let timeout;

    return function(args){
        clearTimeout(timeout);
        timeout =setTimeout(() => fn(args), ms)
    }
}

var onResize2 =(event) => {
    console.log(event , window.innerWidth, window.innerHeight);
}

// window.addEventListener('resize', debounce(onResize, 500));