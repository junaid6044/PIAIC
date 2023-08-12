export {};
function convertDaysToWeeksAndDays(days: number): string {
    if (days < 0) {
        throw new Error("Number of days cannot be negative.");
    }

    var weeks: number = Math.floor(days / 7);
    var remainingDays: number = days % 7;

    var result: string = "";
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

var inputDays: number = 17;

try {
    var convertedString: string = convertDaysToWeeksAndDays(inputDays);
    console.log(`${inputDays} days = ${convertedString}`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}
