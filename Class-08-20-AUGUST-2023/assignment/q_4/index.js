"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCircleArea(radius) {
    if (radius < 0) {
        throw new Error("Radius must be a positive number.");
    }
    const area = Math.PI * radius * radius;
    return area;
}
try {
    var radius = 5;
    var area = calculateCircleArea(radius);
    console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
