class Arc {
    constructor(start, stop, color) {
        this.x = 0
        this.y = 0
        this.w = 250
        this.h = 250
        this.velocity = 0
        this.start = start
        this.stop = stop
        this.color = color
    }

    setup() {}

    draw() {
        push()
        angleMode(DEGREES)
        this.y -= this.velocity
        fill(this.color)
        strokeWeight(1)
        stroke(this.color)
        arc(this.x, this.y, this.w, this.h, this.start, this.stop)
        pop()
    }
}

// Collision detection arc

var ARC_RADIUS = 100
var ARC_ANGLE = Math.PI / 3
var ROTATION_ANGLE = -Math.PI / 4
var hit = false
function draw() {
    background(220)
    push()
    // translate to center of canvas
    translate(width / 2, height / 2)
    // rotate by some angle
    rotate(ROTATION_ANGLE)
    fill(color(180, 220, 210))
    stroke(10)
    arc(0, 0, 2 * ARC_RADIUS, 2 * ARC_RADIUS, -ARC_ANGLE / 2, ARC_ANGLE / 2, PIE)
    pop()
    point(mouseX, mouseY)
    hit = collidePointArc(mouseX, mouseY, width / 2, height / 2, ARC_RADIUS, ROTATION_ANGLE, ARC_ANGLE)

    print("colliding? " + hit)
}
