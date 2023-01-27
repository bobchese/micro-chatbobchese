input.onButtonPressed(Button.A, function () {
    radio.sendString(":D")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
