export {};
function calculatePercentage(obtainedMarks: number, totalMarks: number): number {
    if (totalMarks === 0) {
        throw new Error("Total cannot be zero.");
    }
    return (obtainedMarks / totalMarks) * 100;
}

var obtainedMarks: number = 85;
var totalMarks: number = 100;

try {
    var percentage: number = calculatePercentage(obtainedMarks, totalMarks);
    console.log(`Percentage: ${percentage}%`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}
