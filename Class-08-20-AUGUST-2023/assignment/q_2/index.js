"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printEvenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
printEvenNumbers(numberArray);
