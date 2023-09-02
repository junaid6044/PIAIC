"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaresOfEvenNumbers = numbersArray.filter((num) => num % 2 === 0).map((evenNum) => evenNum * evenNum);
console.log(squaresOfEvenNumbers);
