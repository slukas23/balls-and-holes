const GAME_WIDTH = 800
const GAME_HEIGHT = 550
const ACCELERATION = 0.3

function preload() {
    hitHole = loadSound("./sounds/hit-hole.wav")
    hitArc = loadSound("./sounds/arc-hit.wav")
    gameOver = loadSound("./sounds/game-over.wav")
    gameFont = loadFont("./font/novamono.ttf")
    /* health2 = loadImage()
    health1 = loadImage()
    health0 = loadImage() */
}
