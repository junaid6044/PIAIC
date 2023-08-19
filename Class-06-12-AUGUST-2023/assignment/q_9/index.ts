export {};

function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function convertTemperatures(celsiusTemperatures: number[]): number[] {
    const fahrenheitTemperatures: number[] = [];
    let i = 0;

    while (i < celsiusTemperatures.length) {
        const fahrenheit: number = celsiusToFahrenheit(celsiusTemperatures[i]);
        fahrenheitTemperatures.push(fahrenheit);
        i++;
    }

    return fahrenheitTemperatures;
}

const celsiusTemperatures: number[] = [0, 25, 10, -5, 30, -40];
const fahrenheitTemperatures: number[] = convertTemperatures(celsiusTemperatures);

console.log("Celsius Temperatures:", celsiusTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
