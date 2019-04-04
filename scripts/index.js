/* removes the retry button from DOM */
document.querySelector(".second-row").style.display = "none"

let displayGame = false
const game = new Game()

document.querySelector(".play").addEventListener("click", function() {
    displayGame = true
    let childDiv = document.querySelector(".first-row")
    document.querySelector("body").removeChild(childDiv)
})

document.querySelector(".retry").addEventListener("click", function() {
    displayGame = true
    game.gameOver = false
    game.health = 3
    game.score = 0
    document.querySelector(".second-row").style.display = "none"
})

function setup() {
    game.setup()
}

function draw() {
    if (displayGame) {
        game.draw()
    }
    if (game.ball.y == 300) {
        if (game.hole.color === game.ball.color) {
            let angles = colorAngles[game.ball.color]

            if (game.angle >= angles[0] && game.angle <= angles[1]) {
                scoreBall()
            } else {
                wrongBall()
            }
        }
    }
}

function scoreBall() {
    game.score++
    hitHole.play()
    game.ball.move()

    setTimeout(() => {
        game.randomColor()
        game.ball.color = game.color
        game.hole.color = game.color
    }, 350)
}

function wrongBall() {
    // you have more lives
    if (game.health > 0) {
        game.health--
        //hitArc.play()
        hitArc.play()
        game.ball.wrongMove()
    } else {
        // no more lives for you
        game.over()
    }
}

let colorAngles = {
    "#FF2727": [0, 90],
    "#FDDF1A": [90, 180],
    "#0079D8": [180, 270],
    "#0AD800": [270, 360]
}

function keyPressed() {
    if (keyCode === ENTER) {
        if (game.ball.y == 510) game.ball.move()
        setTimeout(() => {
            if (game.gameOver) gameOver.play()
        }, 300)
    }
}
