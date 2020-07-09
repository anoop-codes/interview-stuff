/**
 * ther are 3 ways to create the object
 *  -literal notation / object constructor
 *  -factory func
 *  -constructor //custom objec constructor
 */

const circle = {
    //object are basiclly a collection of key value pair
    radius: 10,

    //we can't have arrow func inside a objec literal and inside fatory func

    // draw = () => {
    //     console.log('arrow fun this', this.radius); //2
    // },

    move() {
        console.log('regualr fun this', this.radius); // 2
    }

}

//every obj is created from a contructor. for literal = new Object()


//factories func

function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('Draw')
        }
    }
}

const circle1 = createCircle(10);

//constructor

function Circle(radius) {

    this.radius = radius;

    this.draw = () => {
        console.log('arrow fun this', this.radius); //2
    }

    this.move = function () {
        console.log('regualr fun this', this.radius); // 2
    }

}

const circle2 = new Circle(2);


/**
 * Every object has a constructor : it is the fucnc that was used to constr the obj
 *
 * //build in constc
 * new String()
 * new Number()
 * new Boolean()
 * ..
 */

//emurating the member of the obj

//first way
Object.keys(circle2) // will get the array of memeber of the obj

//second way
for (let keys in circle1) {
    if (typeof circle1[keys] == 'function') {
        console.log(circle1[keys]())
    }
}