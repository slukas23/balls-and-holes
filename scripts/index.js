let displayGame = false
const game = new Game()

document.querySelector(".play").addEventListener("click", function() {
    displayGame = true
    document.querySelector(".first-row").innerHTML = ""
})

function setup() {
    game.setup()
}

function draw() {
    if (displayGame) {
        game.draw()
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
        hitArc.play()
        game.ball.wrongMove()
    } else {
        // no more lives for you
        game.over()
        setTimeout(() => gameOver.play(), 350)
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
        if (game.hole.color === game.ball.color) {
            let angles = colorAngles[game.ball.color]
            if (game.angle >= angles[0] && game.angle <= angles[1]) {
                scoreBall()
            } else {
                wrongBall()
            }
        } else {
            wrongBall()
        }
    }

    // if (keyCode === ENTER) {
    //     if (game.hole.color === "#FF2727" && game.angle <= 90 && game.angle >= 0) {
    //         scoreBall()
    //     } else if (game.color === "#FDDF1A" && game.angle <= 180 && game.angle >= 90) {
    //         scoreBall()
    //     } else if (game.color === "#0079D8" && game.angle <= 270 && game.angle >= 180) {
    //         scoreBall()
    //     } else if (game.color === "#0AD800" && game.angle <= 360 && game.angle >= 270) {
    //         scoreBall()
    //     } else if (game.health !== 0) {
    //         game.health--
    //         hitArc.play()
    //         game.ball.wrongMove()
    //     } else {
    //         game.over()
    //         setTimeout(() => gameOver.play(), 350)
    //     }
    // }
}
