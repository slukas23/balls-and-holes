class Ball {
    constructor(color) {
        this.color = color
    }

    setup() {
        this.x = 450
        this.y = 510
        this.w = 20
        this.h = 20
        this.velocity = 0
    }

    move() {
        this.velocity = 15
    }

    wrongMove() {
        this.velocity = 15
        setTimeout(() => {
            this.velocity = -10
        }, 200)
    }

    draw() {
        this.y -= this.velocity

        fill(this.color)
        strokeWeight(5)
        ellipse(this.x, this.y, this.w, this.h)
        if (this.y < 200 || this.y > GAME_HEIGHT) {
            this.velocity = 0
            this.x = 450
            this.y = 510
        }
    }
}
