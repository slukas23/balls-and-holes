/* const game = new Ball(50, 50, 80, 80) */

class Game {
    constructor() {
        this.ball = new Ball()
        this.hole = new Hole()
        this.angle = 0
        this.arc = this.arc = [
            new Arc(180, 270, "#0079D8"),
            new Arc(270, 360, "#FDDF1A"),
            new Arc(90, 180, "#0AD800"),
            new Arc(0, 90, "#FF2727")
        ]

        //this.innerCircle = new Circle(400, 200, 250)
        //this.outerCircle = new Circle(400, 200, 300)

        //this.gameOver = false
        //this.score = 0
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        frameRate(60) /* This number means how many times it refresh every second */
        this.ball.setup()
        this.hole.setup()
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

            push()
            translate(400, 200)
            rotate(this.angle)
            this.arc.forEach(arc => arc.draw())
            pop()
            this.angle += 1
            this.hole.draw()

            fill(100, 50) /* Sets the color of the big circle */
            //this.innerCircle.draw()
            //this.outerCircle.draw()
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
