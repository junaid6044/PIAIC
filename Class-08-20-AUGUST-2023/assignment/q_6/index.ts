export {};

function findLargestElement(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array is empty.");
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

try {
    const numberArray: number[] = [15, 6, 28, 43, 8, 21];
    const largestNumber: number = findLargestElement(numberArray);
    console.log("Original Array is ", numberArray);
    console.log(`The largest number in the array is: ${largestNumber}`);
} catch (error) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}
