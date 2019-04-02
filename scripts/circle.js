class Circle {
    constructor(cx, cy, r, numSpokes) {
        this.cx = cx
        this.cy = cy
        this.r = r
        this.numSpokes = numSpokes
        this.t = 0
    }

    draw() {
        this.t += 0.03
        translate(this.cx, this.cy)
        rotate(this.t)
        ellipse(0, 0, this.r)
        // line(-this.r / 2, 0, this.r / 2, 0)
        //rotate(PI / 2)
        line(-this.r / 2, 0, this.r / 2, 0)
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
