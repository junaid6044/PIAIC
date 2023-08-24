"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeEvenNumbers(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersArray = removeEvenNumbers(numberArray);
console.log("Odd numbers in the array:", oddNumbersArray);
