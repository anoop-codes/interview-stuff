/**
 * Currying is breaking down a function with multiple arguments into one or more functions that each accept a single argument.
 */

function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(null, 2);
multiplyByTwo(4); // 8


