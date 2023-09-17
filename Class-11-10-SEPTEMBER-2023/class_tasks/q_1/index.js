// export {};
// // async and await
// console.log("Before SetTimeOut console");
// function doSomeThing() {
//     console.log("Print doSomeThing console")
// }
// // setTimeout(doSomeThing, 3000);
// // setInterval(doSomeThing, 1000);
// function promiseFunction(resolve:any, reject:any) {
//     if (true) {
//         resolve("Successful in resolve")
//     }
//     else {
//         reject("SomeThing went wrong in reject")
//     }
// }
// let result = new Promise(promiseFunction)
// result.then((success)=>{
//     console.log("success", success);
// })
// .catch((error)=>{
//     console.log("error", error);
// })
// console.log("After SetTimeOut console");
// import inquirer from "inquirer";
// inquirer.prompt([
//     {
//         name: "age",
//         type: "number",
//         message: "Enter your age?",
//     },
//     {
//         name: "name",
//         type: "input",
//         message: "Enter your Name?",
//     },
// ])
// .then((answer)=>{
//     console.log(answer)
// });
import inquirer from "inquirer";
inquirer
    .prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter the first number?",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter the second number?",
    },
    {
        name: "operation",
        type: "list",
        message: "Enter the operation?",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
])
    .then((answer) => {
    console.log(answer);
    switch (answer.operation) {
        case "Addition":
            console.log(answer.num1 + answer.num2);
            break;
        case "Subtraction":
            console.log(answer.num1 - answer.num2);
            break;
        case "Multiplication":
            console.log(answer.num1 * answer.num2);
            break;
        case "Division":
            console.log(answer.num1 / answer.num2);
            break;
        default:
            break;
    }
});
