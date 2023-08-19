"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeNegativeNumbers(numbers) {
    return numbers.filter(number => number >= 0);
}
const numbers = [5, -2, 10, -8, 15, -3, 0];
const positiveNumbers = removeNegativeNumbers(numbers);
console.log("Original numbers:", numbers);
console.log("Positive numbers:", positiveNumbers);
