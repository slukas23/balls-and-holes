class Ball {
    constructor() {}

    setup() {
        this.x = 450
        this.y = 510
        this.w = 30
        this.h = 30
        this.velocity = 0
    }

    move() {
        this.velocity = 15
    }

    draw() {
        this.y -= this.velocity
        fill("#3b3b3b")
        ellipse(this.x, this.y, this.w, this.h)
        if (this.y < 200) {
            this.velocity = 0
            this.x = 450
            this.y = 510
        }
    }
}
