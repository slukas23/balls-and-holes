class Hole {
    constructor() {
        this.x = 450
        this.y = 200
        this.w = 50
        this.h = 50
        let color = ["#FF2727", "#0AD800", "#FDDF1A", "#0079D8"] // red, yellow, green, blue
        this.color = color[Math.floor(Math.random() * 4)]
    }

    setup() {}

    draw() {
        fill(this.color)
        stroke("#f0f0f0")
        strokeWeight(10)
        ellipse(this.x, this.y, this.w, this.h)
    }

    randomColor() {
        let color = ["#FF2727", "#0AD800", "#FDDF1A", "#0079D8"] // red, yellow, green, blue
        this.color = color[Math.floor(Math.random() * 4)]
    }
}
