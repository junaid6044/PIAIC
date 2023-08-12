"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertDaysToWeeksAndDays(days) {
    if (days < 0) {
        throw new Error("Number of days cannot be negative.");
    }
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
    var result = "";
    if (weeks > 0) {
        result += `${weeks} week${weeks > 1 ? 's' : ''}`;
        if (remainingDays > 0) {
            result += ` and `;
        }
    }
    if (remainingDays > 0) {
        result += `${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
    }
    return result;
}
var inputDays = 17;
try {
    var convertedString = convertDaysToWeeksAndDays(inputDays);
    console.log(`${inputDays} days = ${convertedString}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
