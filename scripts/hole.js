class Hole {
    constructor() {}

    setup() {
        this.x = 400
        this.y = 200
        this.w = 50
        this.h = 50
    }

    draw() {
        fill(0)
        ellipse(this.x, this.y, this.w, this.h)
    }
}
