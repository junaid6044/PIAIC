"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateSumOfEvenNumbers(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i += 2) {
        sum += i;
    }
    return sum;
}
const numberOfEvenNumbers = 20;
const sum = calculateSumOfEvenNumbers(numberOfEvenNumbers);
console.log(`Sum of the first ${numberOfEvenNumbers} even numbers: ${sum}`);
