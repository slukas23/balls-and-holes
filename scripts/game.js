/* const game = new Ball(50, 50, 80, 80) */
class Game {
    constructor() {
        // add some properties
        this.ball = new Ball()
        this.hole = new Hole()
        this.circle = new Circle()
        //this.gameOver = false
        //this.score = 0
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        frameRate(60) /* This number means how many times it refresh every second */
        this.ball.setup()
        this.hole.setup()
        //this.circle.setup()
    }

    /* setScoreInterval() {
        this.scoreInterval = setInterval(
            function() {
                this.score++
                document.querySelector("h1").innerHTML = `Score: ${this.score}`
            }.bind(this),
            1000
        )
    } */

    draw() {
        clear()
        background("#e2e2e2")
        if (this.gameOver) {
            textSize(50)
            text("Game Over", 10, 30)
        } else {
            this.ball.draw()
            this.hole.draw()
            this.circle.draw()
        }
    }

    /* draw() {
    clear()
background("red")
translate(width / 2, height / 2)
scale(0.6)
var wheel = new Wheel(0, 0, 300)

fill("#3b3b3b")
wheel.draw()

t += 0.07 */

    over() {
        this.gameOver = true
        clearInterval(this.scoreInterval)
    }
}
