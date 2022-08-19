radio.onReceivedNumber(function (receivedNumber) {
    Patate = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    Patate = randint(10, 30)
})
input.onGesture(Gesture.Shake, function () {
    if (Patate > 0) {
        radio.sendNumber(Patate)
        Patate = -1
    }
})
let Patate = 0
radio.setGroup(5)
Patate = -1
basic.forever(function () {
    if (Patate == 0) {
        basic.showIcon(IconNames.Ghost)
        for (let index = 0; index < 4; index++) {
            music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
            basic.pause(1000)
        }
        Patate = -1
    } else if (Patate < 0) {
        basic.clearScreen()
    } else if (Patate > 0) {
        basic.showIcon(IconNames.Diamond)
        Patate += -1
        basic.pause(500)
    }
})
