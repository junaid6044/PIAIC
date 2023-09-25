import inquirer from "inquirer";
import chalk from 'chalk';
import { add, subtract, multiply, divide } from './calculator.js';
async function main() {
    const { operation, num1, num2 } = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
        },
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number',
        },
    ]);
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result = 0;
    switch (operation) {
        case 'Add':
            result = add(a, b);
            break;
        case 'Subtract':
            result = subtract(a, b);
            break;
        case 'Multiply':
            result = multiply(a, b);
            break;
        case 'Divide':
            if (b === 0) {
                console.log(chalk.red.bgWhite.bold('Error: Cannot divide by zero'));
                return;
            }
            result = divide(a, b);
            break;
    }
    console.log(chalk.green.bgWhite.bold(`Result: ${result}`));
}
main();
