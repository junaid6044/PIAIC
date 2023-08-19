"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertTemperatures(celsiusTemperatures) {
    const fahrenheitTemperatures = [];
    let i = 0;
    while (i < celsiusTemperatures.length) {
        const fahrenheit = celsiusToFahrenheit(celsiusTemperatures[i]);
        fahrenheitTemperatures.push(fahrenheit);
        i++;
    }
    return fahrenheitTemperatures;
}
const celsiusTemperatures = [0, 25, 10, -5, 30, -40];
const fahrenheitTemperatures = convertTemperatures(celsiusTemperatures);
console.log("Celsius Temperatures:", celsiusTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
