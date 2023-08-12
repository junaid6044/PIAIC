"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateDiscount(price) {
    if (price < 0) {
        throw new Error("Price cannot be negative.");
    }
    return (price > 100) ? (price * 0.1) : (price * 0.05);
}
var productPrice = 120;
try {
    var discountAmount = calculateDiscount(productPrice);
    console.log(`Original Price: $${productPrice.toFixed(2)}`);
    console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
    var discountedPrice = productPrice - discountAmount;
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
