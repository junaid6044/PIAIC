export {};

function calculateSumOfEvenNumbers(limit: number): number {
    let sum = 0;

    for (let i = 2; i <= limit; i += 2) {
        sum += i;
    }

    return sum;
}

const numberOfEvenNumbers: number = 20;
const sum: number = calculateSumOfEvenNumbers(numberOfEvenNumbers);
console.log(`Sum of the first ${numberOfEvenNumbers} even numbers: ${sum}`);
