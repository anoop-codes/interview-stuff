/**
 * Global variables can be made local (private) with closures.
 *
 * closure : is a inner function that have access to outer function , even when the exection of the outer function is completed.
 *          *coz of not refernce variable , it is not collected by the garbage collector.
 *
 * A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; this happen coz of scope chaining.The scope chain gives us access to variables in the parent environment.
 *
 *  A new lexical environment is created when curly brackets {} are used, even nested brackets {{...}} create a new lexical environment. The execution context tells the engine which lexical environment it is currently working in and the lexical scope determines the available variables.
 */


//example 1
function Name(firstName, secondname) {
    this.firstName = firstName;
    this.secondname = secondname;
    return function () {
        return `${this.firstName} ${this.secondname}`
    }
}

const name = Name('anoop', 'kumar')()

//example 2 
function calcPie() {
    const pi = 3.14;

    return function (number) {
        return pi * number
    }
}

const result = calcPie()(3) // 9.42


//example 3
/**
 * with let i => 1,2, 3
 * with var i => 3,3,3
 * 
 * coz let has block scope, settime will get new i everytime , var has function scope , it dont create a new variable , it just chnages a new variable
 * 
 * if we keep var and fix it , then inclose the function in IIFE and pass the i
 */

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('settimeout', i);
    }, 1000);
}

console.log('after the loop')