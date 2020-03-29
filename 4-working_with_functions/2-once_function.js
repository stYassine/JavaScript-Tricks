/// function that only can be called Once

var once =fn => {
    let called = false;
    return function(){
        if(!called){
            called = true;
            return fn();
        }
    }
};

var onClick = () => console.log('Clicked');

var button = document.querySelector('#button');

button.addEventListener('click', once(onClick));



/// if you want to pass args
var once2 = (fn, text) => {
    let called = false;
    return function(){
        if(!called){
            called = true;
            return fn(text);
        }
    }
};

var onClick2 = text => console.log('Clicked');

var button2 = document.querySelector('#button');

button2.addEventListener('click', once(onClick, 'Hello World'));