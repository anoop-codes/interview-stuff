/**
 * For code reusablity
 *
 * proptype is the bascially the parent of another object.
 *
 * every object in js a has parent and it inherite property and method from that parent.
 *
 * to get the propotype of an object we use Object.getProtoTypeOf(objct)
 *
 * the js engine walks of the prototype chain 
 */

let person = {
    name: 'anoop'
}

person.toString();

for (let keys in person) {
    console.log(keys)
}
//but we enumerateonly the instance member is displayed.
//attribute attached

const toStringProp = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(person), 'toString');
/**
    configurable: true // able to delete
    enumerable: false // able to loop
    value: ƒ toString()
    writable: true // we can override the this method
 */



//we can define this our own ProperyDescriptor

Object.defineProperty(person, 'name', {
    // if we using properDiscriptor we cann't do getter and setter

    configurable: true,
    enumerable: false,
    writable: false //readOnly

})


//constructor

const obj = {}
Object.getPrototypeOf(obj);
//__protot___ (parent of Obj)

/**
 * every Contruc too have protorType property
 * Circle.prototype : is the object that will be used as a parent , that is created from Circel contructor
 * propotype help to add property to a contrcut.
 *
 * obj.__proto___ === Object.prototype
 *
 *
 * the property define on the prototype can help to remove depublice copy of instance member
 */

function Circle(radius) {
    //instance member
    this.radius = radius;

}

//prototype member
Circle.prototype.draw = function () {
    console.log('Draw');
}


//override the fuc
Circle.prototype.toString = function () {
    return 'anoop kumar'
}



const circle = new Circle(10);

//to emurate over the  prototype propert we use  for in loop , but Object.key return instance member
