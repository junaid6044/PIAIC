export {};

function removeNegativeNumbers(numbers: number[]): number[] {
  const result = numbers.filter((num) => num >= 0);
  return result;
}

const numbersArray: number[] = [1, -2, 3, -4, 5, -6];
console.log( removeNegativeNumbers(numbersArray));
