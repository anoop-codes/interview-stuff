function Shape(color) {
    //instance member
    this.color = color;
    this.shapeCount = function () {
        console.log('shape count')
    }
}

//prototype member
Shape.prototype.draw = function (shape) {
    console.log(`draw the shape of the ${shape}`)
}


//circle
function Circle(raduis, color) {
    Shape.call(this, color);
    this.raduis = raduis;
}

//Object.create : Creates an object that has the specified prototype or that has null prototype
Circle.prototype = Object.create(Shape.prototype);
//reseting the constrcutor
Circle.prototype.constructor = Circle;

const circle = new Circle(8, 'red');




//square
function Sqaure() {
}

//new get the instance as well as the prototype member ,calling the shape constr into the constr sq
Sqaure.prototype = new Shape();
Sqaure.prototype.constructor = Sqaure

const sq = new Sqaure();

