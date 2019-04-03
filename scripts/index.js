const game = new Game()

function setup() {
    game.setup()
}

function draw() {
    game.draw()
}
function keyPressed() {
    if (keyCode === ENTER) {
        game.ball.move()
        if (game.hole.color[0] === "#FF2727" && game.angle <= 90 && game.angle >= 0) {
            game.score++
        }

        /*  } else if (game.hole.color[1] === "#0AD800" && game.angle <= 180 && game.angle >= 90) {
            game.score++
        } else if (game.hole.color[2] === "#FDDF1A" && game.angle <= 270 && game.angle >= 180) {
            game.score++
        } else if (game.hole.color[3] === "#0079D8" && game.angle <= 360 && game.angle >= 270) {
            game.score++
        }
    */
    }
}
