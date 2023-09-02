"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbersArray = [3, 6, 9, 12, 15, 18];
const doubledOddNumbers = numbersArray.filter((num) => num % 2 !== 0).map((oddNum) => oddNum * 2);
console.log(doubledOddNumbers);
