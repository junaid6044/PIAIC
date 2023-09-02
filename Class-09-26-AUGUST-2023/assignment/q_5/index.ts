export {};

const celsiusTemperatures: number[] = [0, 10, 20, 30, 40];

const fahrenheitTemperatures: number[] = celsiusTemperatures.map((celsius) => (celsius * 9/5) + 32);

console.log(fahrenheitTemperatures);