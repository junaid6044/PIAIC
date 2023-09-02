"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeNegativeNumbers(numbers) {
    const result = numbers.filter((num) => num >= 0);
    return result;
}
const numbersArray = [1, -2, 3, -4, 5, -6];
console.log(removeNegativeNumbers(numbersArray));
