/* const game = new Ball(50, 50, 80, 80) */
class Game {
    constructor() {
        // add some properties
        this.ball = new Ball()
        /* this.circle = new Circle() */
        this.gameOver = false
        this.score = 0
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        frameRate(60) /* This number means how many times it refresh every second */
        this.ball.setup() /* ?? */
    }

    setScoreInterval() {
        this.scoreInterval = setInterval(
            function() {
                this.score++
                document.querySelector("h1").innerHTML = `Score: ${this.score}`
            }.bind(this),
            1000
        )
    }

    keyPressed() {
        if (keyCode === BACKSPACE) {
            this.ball.y--
        }
    }

    draw() {
        clear()
        background("#d2d2d2")
        if (this.gameOver) {
            textSize(50)
            text("Game Over", 10, 30)
        } else {
            this.ball.draw()
        }
    }

    over() {
        this.gameOver = true
        clearInterval(this.scoreInterval)
    }
}
