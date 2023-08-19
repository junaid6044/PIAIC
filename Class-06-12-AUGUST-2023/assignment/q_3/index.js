"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoppingCart = [];
function printCartContents(cart) {
    console.log("Cart Contents:");
    for (const item of cart) {
        console.log(`${item.name} - Price: $${item.price} - Quantity: ${item.quantity}`);
    }
    console.log("---------------------");
}
function addItemToCart(name, price, quantity) {
    const newItem = { name, price, quantity };
    shoppingCart.push(newItem);
    printCartContents(shoppingCart);
}
function removeItemFromCart(index) {
    if (index >= 0 && index < shoppingCart.length) {
        shoppingCart.splice(index, 1);
        console.log("Item removed from the cart.");
    }
    else {
        console.log("Invalid index, item not removed.");
    }
    printCartContents(shoppingCart);
}
function updateItemQuantity(index, newQuantity) {
    if (index >= 0 && index < shoppingCart.length) {
        shoppingCart[index].quantity = newQuantity;
        console.log("Quantity updated.");
    }
    else {
        console.log("Invalid index, quantity not updated.");
    }
    printCartContents(shoppingCart);
}
// Example usage
addItemToCart("Item 1", 10, 2);
addItemToCart("Item 2", 15, 1);
addItemToCart("Item 3", 5, 3);
removeItemFromCart(1);
updateItemQuantity(0, 5);
