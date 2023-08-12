"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDayOfWeek(dayNumber) {
    if (dayNumber < 1 || dayNumber > 7) {
        throw new Error("Invalid day number. Please enter a number between 1 and 7.");
    }
    if (dayNumber === 1) {
        return "Monday";
    }
    else if (dayNumber === 2) {
        return "Tuesday";
    }
    else if (dayNumber === 3) {
        return "Wednesday";
    }
    else if (dayNumber === 4) {
        return "Thursday";
    }
    else if (dayNumber === 5) {
        return "Friday";
    }
    else if (dayNumber === 6) {
        return "Saturday";
    }
    else {
        return "Sunday";
    }
}
var userDayNumber = 7;
try {
    var dayOfWeek = getDayOfWeek(userDayNumber);
    console.log(`Day ${userDayNumber} is ${dayOfWeek}.`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
