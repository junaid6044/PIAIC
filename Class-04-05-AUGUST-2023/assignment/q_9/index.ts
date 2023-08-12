export {};
function getDayOfWeek(dayNumber: number): string {
    if (dayNumber < 1 || dayNumber > 7) {
        throw new Error("Invalid day number. Please enter a number between 1 and 7.");
    }

    if (dayNumber === 1) {
        return "Monday";
    } else if (dayNumber === 2) {
        return "Tuesday";
    } else if (dayNumber === 3) {
        return "Wednesday";
    } else if (dayNumber === 4) {
        return "Thursday";
    } else if (dayNumber === 5) {
        return "Friday";
    } else if (dayNumber === 6) {
        return "Saturday";
    } else {
        return "Sunday";
    }
}

var userDayNumber: number = 7;

try {
    var dayOfWeek: string = getDayOfWeek(userDayNumber);
    console.log(`Day ${userDayNumber} is ${dayOfWeek}.`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}
