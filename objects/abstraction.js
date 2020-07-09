/**
 * abstraction : Abstraction hides certain details and only show the essential features of the object. It tries to reduce and factor out details so that the developer can focus on a few concepts at a time. This approach improves understandability as well as maintainability of the code.
 */

function Circle(radius) {

    //local variable
    const defaultLocation = { x: 0, y: 0 }

    //local methos , private mthod
    const computeDefaultLocation = function () {
        ///.....
    }

    this.radius = radius;

    this.draw = function () {
        computeDefaultLocation();//closuer 
        console.log(`Draw a Circle with raduis ${this.radius}`)
    }

    Object.defineProperty(this, 'defaultLocation', {
        //propertyDiscriptor

        //readOnly propery
        get: () => {
            return defaultLocation;
        },
        set: () => {
            //we can set the value , and also we can do error checking
        }

    })
}

let circle = new Circle(10);
