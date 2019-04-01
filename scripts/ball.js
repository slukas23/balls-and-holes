class Ball {
    constructor() {}

    setup() {
        this.x = 400
        this.y = 550
        this.w = 30
        this.h = 30
        this.velocity = 0
    }

    draw() {
        fill(0)
        ellipse(this.x, this.y, this.w, this.h)
        if (keyIsPressed) {
            this.y--
            this.velocity = -6
        }
        this.velocity += ACCELERATION * -1
    }
}

if (keyIsPressed) {
    if (this.firstMouseClick) {
        this.velocity = -6
        this.firstMouseClick = false
    }
    this.velocity += ACCELERATION * -1
} else {
    this.firstMouseClick = true
    this.velocity += ACCELERATION
}

this.ypos += this.velocity
