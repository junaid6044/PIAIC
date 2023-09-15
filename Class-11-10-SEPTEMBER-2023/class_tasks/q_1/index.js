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
import inquirer from "inquirer";
inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age?",
}, {
    name: "name",
    type: "input",
    message: "Enter your Name?",
})
    .then((anwser) => {
    console.log(anwser);
});
