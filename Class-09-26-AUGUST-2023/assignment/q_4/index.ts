export {};

const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaresOfEvenNumbers: number[] = numbersArray.filter((num) => num % 2 === 0).map((evenNum) => evenNum * evenNum);

console.log(squaresOfEvenNumbers);
