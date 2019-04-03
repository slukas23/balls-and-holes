/* const game = new Ball(50, 50, 80, 80) */

class Game {
    constructor() {
        this.ball = new Ball()
        this.hole = new Hole(3)
        this.angle = 0
        this.score = 0
        this.arc = [
            new Arc(270, 360, "#FDDF1A"), // yellow
            new Arc(180, 270, "#0079D8"), // blue
            new Arc(90, 180, "#0AD800"), // green
            new Arc(0, 90, "#FF2727") // red
        ]

        //this.gameOver = false
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
        fill(50)
        text(this.score, 30, 100)
        textSize(40)
        //textFont(avenir)

        if (this.gameOver) {
            textSize(50)
            text("Game Over", 10, 30)
        } else {
            push()
            translate(450, 200)
            rotate(this.angle)
            this.arc.forEach(arc => arc.draw())
            pop()
            this.ball.draw()
            this.angle += 2
            this.angle = this.angle % 360

            this.hole.draw()
        }
    }

    over() {
        this.gameOver = true
        clearInterval(this.scoreInterval)
    }
}

//loadFont("assets/Avenir.otf")
