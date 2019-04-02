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
    }
}
