"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArraySum(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
const numberArray = [5, 10, 15, 20];
console.log(`Sum of the array elements: ${calculateArraySum(numberArray)}`);
