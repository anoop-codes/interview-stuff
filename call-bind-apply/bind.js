/**
 * bind : methos retun a new bound function which wrap the original function obj ;
 * once bound the this context can't be changed
 */

const obj = {
    name: 'john'
}


function greeting(a, b) {
    return console.log(`${a} ${this.name} ${b}`);
}

let boundFn = greeting.bind(obj);

boundFn('hello', 'how are u');