export {};
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

var celsiusTemperature: number = 25;
var fahrenheitTemperature: number = 77;

var convertedToFahrenheit: number = celsiusToFahrenheit(celsiusTemperature);
var convertedToCelsius: number = fahrenheitToCelsius(fahrenheitTemperature);

console.log(`${celsiusTemperature}°C is ${convertedToFahrenheit}°F`);
console.log(`${fahrenheitTemperature}°F is ${convertedToCelsius}°C`);
