class Hole {
    constructor() {}

    setup() {
        this.x = 300
        this.y = 450
        this.w = 30
        this.h = 30
    }

    draw() {
        fill(0)
        ellipse(this.x, this.y, this.w, this.h)
    }
}
