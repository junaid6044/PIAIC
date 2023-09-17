import inquirer from "inquirer";
async function userInput() {
    var result = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter the first number?",
        },
    ]);
    console.log("num1 is", result.num1);
}
userInput();
console.log("After async function");
