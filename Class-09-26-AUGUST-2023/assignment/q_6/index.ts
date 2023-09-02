export {};

const numbersArray: number[] = [3, 6, 9, 12, 15, 18];

const doubledOddNumbers: number[] = numbersArray.filter((num) => num % 2 !== 0).map((oddNum) => oddNum * 2);

console.log(doubledOddNumbers);