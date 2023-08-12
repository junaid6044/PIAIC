export {};
function determineAgeCategory(age: number): string {
    if (age < 0) {
        throw new Error("Age cannot be negative.");
    }

    if (age >= 0 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

var userAge: number = 15;

try {
    var ageCategory: string = determineAgeCategory(userAge);
    console.log(`User's Age: ${userAge}`);
    console.log(`Age Category: ${ageCategory}`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}
