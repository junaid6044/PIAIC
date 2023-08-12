export {};
function checkDivisibility(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
        return `${number} is divisible by both 3 and 5.`;
    } else if (number % 3 === 0) {
        return `${number} is divisible by 3.`;
    } else if (number % 5 === 0) {
        return `${number} is divisible by 5.`;
    } else {
        return `${number} is not divisible by 3 or 5.`;
    }
}

var userInput: number = 15;
console.log(checkDivisibility(userInput));
