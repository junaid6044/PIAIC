export {};

function calculateCircleArea(radius: number): number {
    if (radius < 0) {
        throw new Error("Radius must be a positive number.");
    }

    const area = Math.PI * radius * radius;
    return area;
}

try {
    var radius: number = 5;
    var area: number = calculateCircleArea(radius);
    console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);
} catch (error) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}