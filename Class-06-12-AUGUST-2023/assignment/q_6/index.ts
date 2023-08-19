export {};

function calculateFactorial(num: number): number {
    if (num < 0) {
        throw new Error("Input must be a positive integer.");
    }

    let factorial: number = 1;

    while (num > 0) {
        factorial *= num;
        num--;
    }

    return factorial;
}

try {
    const inputNumber: number = 5;
    const factorialResult: number = calculateFactorial(inputNumber);
    console.log(`Factorial of ${inputNumber} is ${factorialResult}`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}