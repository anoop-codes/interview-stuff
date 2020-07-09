const Circle = function () {
    this.draw = function () {
        console.log(this)
    }
}

const circle = new Circle();

//method call
circle.draw()//circle obj

const c1 = circle.draw;

//it is a function call (stand alone), so it point to the window obj , if the use strict , it will give undefined.
c1() // window object

//to fix this we use call
c1.call(circle);


/**
 * in es-6 class , it run under strict mode
 */


//Example -1
(function () {

    //b don't have any var , so it be behavie like an global variable
    var a = b = 3;

})();


console.log("a defined? " + (typeof a !== 'undefined')); // false
console.log("b defined? " + (typeof b !== 'undefined')); // true


//example 2
var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //bar
        console.log("outer func:  self.foo = " + self.foo); //bar
        (function () {
            console.log("inner func:  this.foo = " + this.foo); //un
            console.log("inner func:  self.foo = " + self.foo); //bar
        }.bind(this)());
    }
};

myObject.func();

