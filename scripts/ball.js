class Ball {
    constructor() {}

    setup() {
        this.x = 400
        this.y = 550
        this.w = 30
        this.h = 30
        this.velocity = 0
    }

    move() {
        this.velocity = 15
    }

    draw() {
        this.y -= this.velocity
        fill(0)
        ellipse(this.x, this.y, this.w, this.h)
    }
}
