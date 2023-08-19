export {};

function removeNegativeNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number >= 0);
}

const numbers: number[] = [5, -2, 10, -8, 15, -3, 0];
const positiveNumbers: number[] = removeNegativeNumbers(numbers);
console.log("Original numbers:", numbers);
console.log("Positive numbers:", positiveNumbers);
