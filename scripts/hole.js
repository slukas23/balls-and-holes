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
        //fill(this.color[randomizer(0, 2)])
        //fill(this.color[randomizer(0, 2)])
        fill(this.color)
        ellipse(this.x, this.y, this.w, this.h)
    }

    randomColor() {
        let color = ["#FF2727", "#0AD800", "#FDDF1A", "#0079D8"] // red, yellow, green, blue
        this.color = color[Math.floor(Math.random() * 4)]
    }
}
