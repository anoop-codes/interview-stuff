/**
 * these 3 methods are used to control the invocation of the function, and set the context od the this.
 */

//example -1
const person = {
    firstname: 'john',
    lastname: 'Deo',

    name(city, state) {
        return console.log(`${this.firstname} ${this.lastname} belong to ${city}, ${state}`);
    }
}

const person1 = {
    firstname: 'anoop',
    lastname: 'kumar',
}

//can borrow the function of person obj
person.name.call(person1);// anoop kumar , undefined undefined.

//if the name has some argument then
//call
person.name.call(person1, 'patna', 'bihar');

//apply , differnce is apply the arugment to the borrowed method is passed a an array
person.name.apply(person1, ['nashik', 'maharashtra']);


// apply
//on maths operator
Math.max.apply(null, [1, 2, 4, 4, 5, 6, 7, 7, 8, 8]);

