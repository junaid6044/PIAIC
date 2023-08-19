export  {};

function calculateArraySum(numbers: number[]): number {
    let sum: number = 0;
    let i: number = 0;

    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }

    return sum;
}

const numberArray: number[] = [5, 10, 15, 20];
console.log(`Sum of the array elements: ${calculateArraySum(numberArray)}`);
