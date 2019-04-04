/* const game = new Ball(50, 50, 80, 80) */

class Game {
    constructor() {
        let color = ["#FF2727", "#0AD800", "#FDDF1A", "#0079D8"] // red, yellow, green, blue
        this.color = color[Math.floor(Math.random() * 4)]
        this.ball = new Ball(this.color)
        this.hole = new Hole(this.color)
        this.angle = 0
        this.score = 0
        this.health = 3
        this.arc = [
            new Arc(270, 360, "#FDDF1A"), // yellow
            new Arc(180, 270, "#0079D8"), // blue
            new Arc(90, 180, "#0AD800"), // green
            new Arc(0, 90, "#FF2727") // red
        ]
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        frameRate(60) /* This number means how many times it refresh every second */
        this.ball.setup()
        this.hole.setup()
    }

    draw() {
        clear()
        background("#f0f0f0")
        fill("#3b3b3b")
        strokeWeight(0)
        textFont(gameFont, 36)
        text("Score " + this.score, 30, 100)
        text("Health " + this.health, 30, 200)
        textSize(40)

        if (this.gameOver) {
            textSize(60)
            text("Game Over!", 250, 250)
        } else {
            push()
            translate(450, 200)
            // if (this.score > 2) rotate(-this.angle)
            // else
            rotate(this.angle)
            // rotate(-this.angle)
            this.arc.forEach(arc => arc.draw())
            pop()
            this.ball.draw()
            this.angle += 2 + this.score * 0.1
            // console.log(this.angle)
            this.angle = this.angle % 360
            // this.angle *= -1
            this.hole.draw()
        }
    }

    over() {
        this.gameOver = true
        clearInterval(this.score)
    }

    randomColor() {
        let color = ["#FF2727", "#0AD800", "#FDDF1A", "#0079D8"] // red, yellow, green, blue
        this.color = color[Math.floor(Math.random() * 4)]
    }
}
