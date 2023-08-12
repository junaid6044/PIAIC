"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function determineAgeCategory(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative.");
    }
    if (age >= 0 && age <= 12) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
var userAge = 15;
try {
    var ageCategory = determineAgeCategory(userAge);
    console.log(`User's Age: ${userAge}`);
    console.log(`Age Category: ${ageCategory}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
