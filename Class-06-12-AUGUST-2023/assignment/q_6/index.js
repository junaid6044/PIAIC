"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateFactorial(num) {
    if (num < 0) {
        throw new Error("Input must be a positive integer.");
    }
    let factorial = 1;
    while (num > 0) {
        factorial *= num;
        num--;
    }
    return factorial;
}
try {
    const inputNumber = 5;
    const factorialResult = calculateFactorial(inputNumber);
    console.log(`Factorial of ${inputNumber} is ${factorialResult}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
