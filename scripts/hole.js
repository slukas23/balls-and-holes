class Hole {
    constructor(color) {
        this.x = 450
        this.y = 200
        this.w = 50
        this.h = 50
        this.color = color
    }

    setup() {}

    draw() {
        fill(this.color)
        stroke("#f0f0f0")
        strokeWeight(10)
        ellipse(this.x, this.y, this.w, this.h)
    }
}
