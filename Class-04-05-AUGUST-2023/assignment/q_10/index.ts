export {};
function calculateBill(unitsConsumed: number): number {
    if (unitsConsumed < 0) {
        throw new Error("Units consumed cannot be negative.");
    }

    var baseRate: number = 0;
    var taxRate: number = 0;

    if (unitsConsumed <= 100) {
        baseRate = unitsConsumed * 1.0;
    } else if (unitsConsumed <= 200) {
        baseRate = 100 * 1.0 + (unitsConsumed - 100) * 1.5;
    } else if (unitsConsumed <= 300) {
        baseRate = 100 * 1.0 + 100 * 1.5 + (unitsConsumed - 200) * 2.0;
    } else if (unitsConsumed <= 500) {
        baseRate = 100 * 1.0 + 100 * 1.5 + 100 * 2.0 + (unitsConsumed - 300) * 2.5;
    } else {
        baseRate = 100 * 1.0 + 100 * 1.5 + 100 * 2.0 + 200 * 2.5 + (unitsConsumed - 500) * 3.0;
    }

    if (baseRate >= 0 && baseRate <= 100) {
        taxRate = baseRate;
    }
    else if (baseRate > 100) {
        taxRate = baseRate * 0.1;
    }
    else if (baseRate > 200) {
        taxRate = baseRate * 0.15;
    }
    else if (baseRate > 300) {
        taxRate = baseRate * 0.2;
    }
    else if (baseRate > 500) {
        taxRate = baseRate * 0.25;
    }

    return baseRate + taxRate;
}

var unitsConsumed: number = 250;

try {
    var totalBill: number = calculateBill(unitsConsumed);
    console.log(`Units Consumed: ${unitsConsumed}`);
    console.log(`Total Bill: $${totalBill.toFixed(2)}`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}
