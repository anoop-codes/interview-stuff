class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log(`draw a circle with ${this.radius}`)
    }

}
const circle = new Circle(7);