input.onButtonPressed(Button.A, function () {
    basic.showNumber(magnet)
})
let magnet = 0
magnet = 0
radio.setGroup(1)
basic.clearScreen()
basic.forever(function () {
    magnet = input.magneticForce(Dimension.Strength)
    if (magnet < 400) {
        radio.sendString("open")
    } else {
        radio.sendString("closed")
    }
})
