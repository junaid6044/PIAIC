"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculatePercentage(obtainedMarks, totalMarks) {
    if (totalMarks === 0) {
        throw new Error("Total cannot be zero.");
    }
    return (obtainedMarks / totalMarks) * 100;
}
var obtainedMarks = 85;
var totalMarks = 100;
try {
    var percentage = calculatePercentage(obtainedMarks, totalMarks);
    console.log(`Percentage: ${percentage}%`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
