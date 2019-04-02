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

// Random circle color

/* function randomColor(hexCodes) {
    return heXCodes[Math.floor(Math.random() * hexCodes.length)]
} */

/* var hexCodes = ["#FF2727", "#FDDF1A", "#0AD800", "#0079D8"]
console.log(randomColor(hexCodes)) */

/* let colors = ["#FF2727", "#FDDF1A", "#0AD800", "#0079D8"]
let colors = random(colors)
text(colors, 10, 50) // draw the word */
