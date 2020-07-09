/**
 * Hoisting is the process of putting all variable and function declarations into memory during the compile phase. In JavaScript, functions are fully hoisted, var variables are hoisted and initialized to undefined, and let and const variables are hoisted but not initialized a value. Var variables are given a memory allocation and initialized a value of undefined until they are set to a value in line. So if a var variable is used in the code before it is initialized, then it will return undefined. However, a function can be called from anywhere in the code base because it is fully hoisted. If let and const are used before they are declared, then they will throw a reference error because they have not yet been initialized
 * 
 * or aise to the top
 */




name();
//hello() give error..hello();


//function declearation
function name() {
    console.log(`my name is lucky`)
}


//function expression
var hello = function () {
    console.log('Hello people')
}
hello();