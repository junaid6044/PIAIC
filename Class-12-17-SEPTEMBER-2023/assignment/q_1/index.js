import inquirer from 'inquirer';
async function calculator() {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (value) => !isNaN(Number(value)),
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Modulus', 'Division', 'Exponent'],
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (value) => !isNaN(Number(value)),
            when: (answers) => answers.operation !== 'Exponent',
        },
        {
            type: 'input',
            name: 'exponent',
            message: 'Enter the exponent:',
            validate: (value) => !isNaN(Number(value)),
            when: (answers) => answers.operation === 'Exponent',
        },
    ];
    const answers = await inquirer.prompt(questions);
    const num1 = answers.num1;
    const num2 = answers.num2 || 0;
    const exponent = answers.exponent || 1;
    let result;
    switch (answers.operation) {
        case 'Addition':
            result = num1 + num2;
            break;
        case 'Subtraction':
            result = num1 - num2;
            break;
        case 'Multiplication':
            result = num1 * num2;
            break;
        case 'Modulus':
            result = num1 % num2;
            break;
        case 'Division':
            if (num2 === 0) {
                console.log('Error: Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        case 'Exponent':
            result = Math.pow(num1, exponent);
            break;
        default:
            console.log('Invalid operation selected.');
            return;
    }
    console.log(`Result of ${answers.operation}: ${result}`);
}
calculator();
