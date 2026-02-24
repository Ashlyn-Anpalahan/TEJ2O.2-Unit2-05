/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Ashlyn
* Created on: Feb 2026
* This program will show the current temperature in Kelvin
*/

let temperatureInKelvin: number
let roundedKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    let temperature = input.temperature()
    temperatureInKelvin = (temperature + 273.15)
    roundedKelvin = Math.round(temperatureInKelvin)

    basic.clearScreen()
    basic.showString("The temperature is: " + (roundedKelvin) + " K.")
})
