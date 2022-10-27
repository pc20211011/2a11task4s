let x = 0
input.onButtonPressed(Button.A, function () {
    x = 0
    while (x <= 5) {
        led.plot(x, 0)
        basic.pause(200)
        basic.clearScreen()
        x += 1
    }
})
basic.forever(function () {
	
})
