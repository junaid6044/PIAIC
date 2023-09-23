import inquirer from "inquirer";

async function userInput() {
	var result = await inquirer.prompt([
		{
			name: "num1",
			type: "number",
			message: "Enter a number?",
		},
	])
	try {
		if (result.num1 > 100 || result.num1 < 0) {
			console.log("Enter a valid number between 1 to 100");
		}
		else {
			const marks = result.num1;
			if (marks >= 90) {
				console.log("A+");
			} else if (marks >= 80) {
				console.log("A");
			} else if (marks >= 70) {
				console.log("B");
			} else if (marks >= 60) {
				console.log("C");
			} else if (marks >= 50) {
				console.log("D");
			} else {
				console.log("F");
			}
		}
	} catch (error) {
		console.log("Catch Error is", error)
	}
	finally {
		console.log("Final is print")
	}
}

userInput()