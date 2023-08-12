"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
var celsiusTemperature = 25;
var fahrenheitTemperature = 77;
var convertedToFahrenheit = celsiusToFahrenheit(celsiusTemperature);
var convertedToCelsius = fahrenheitToCelsius(fahrenheitTemperature);
console.log(`${celsiusTemperature}°C is ${convertedToFahrenheit}°F`);
console.log(`${fahrenheitTemperature}°F is ${convertedToCelsius}°C`);
