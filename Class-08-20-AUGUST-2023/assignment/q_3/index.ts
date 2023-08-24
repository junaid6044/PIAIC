export {};

function removeEvenNumbers(numbers: number[]): number[] {
    const oddNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }

    return oddNumbers;
}

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersArray: number[] = removeEvenNumbers(numberArray);
console.log("Odd numbers in the array:", oddNumbersArray);
