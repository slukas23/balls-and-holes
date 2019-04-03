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
        if (game.hole.color === "#FF2727" && game.angle <= 90 && game.angle >= 0) {
            game.score++

            setTimeout(() => game.hole.randomColor(), 350)
        } else if (game.hole.color === "#FDDF1A" && game.angle <= 180 && game.angle >= 90) {
            game.score++
            setTimeout(() => game.hole.randomColor(), 350)
        } else if (game.hole.color === "#0079D8" && game.angle <= 270 && game.angle >= 180) {
            game.score++
            setTimeout(() => game.hole.randomColor(), 350)
        } else if (game.hole.color === "#0AD800" && game.angle <= 360 && game.angle >= 270) {
            game.score++
            setTimeout(() => game.hole.randomColor(), 350)
        } else {
            if (game.health !== 0) {
                game.health--
            } else game.over()
        }
    }
}
