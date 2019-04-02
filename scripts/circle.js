/class Circle {
    constructor() {}

    setup() {
        this.x = 400
        this.y = 200
        this.r = 100
        this.numSpokes = numSpokes
    }

    draw() {
        translate(this.x, this.y)
        rotate(t)
        ellipse(0, 0, this.r)
        line(-this.r / 2, 0, this.r / 2, 0)
    }
}