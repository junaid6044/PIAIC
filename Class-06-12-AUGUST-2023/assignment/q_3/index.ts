export {};

type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

const shoppingCart: CartItem[] = [];

function printCartContents(cart: CartItem[]): void {
    console.log("Cart Contents:");
    for (const item of cart) {
        console.log(`${item.name} - Price: $${item.price} - Quantity: ${item.quantity}`);
    }
    console.log("---------------------");
}

function addItemToCart(name: string, price: number, quantity: number): void {
    const newItem: CartItem = { name, price, quantity };
    shoppingCart.push(newItem);
    printCartContents(shoppingCart);
}

function removeItemFromCart(index: number): void {
    if (index >= 0 && index < shoppingCart.length) {
        shoppingCart.splice(index, 1);
        console.log("Item removed from the cart.");
    } else {
        console.log("Invalid index, item not removed.");
    }
    printCartContents(shoppingCart);
}

function updateItemQuantity(index: number, newQuantity: number): void {
    if (index >= 0 && index < shoppingCart.length) {
        shoppingCart[index].quantity = newQuantity;
        console.log("Quantity updated.");
    } else {
        console.log("Invalid index, quantity not updated.");
    }
    printCartContents(shoppingCart);
}

addItemToCart("Item 1", 10, 2);
addItemToCart("Item 2", 15, 1);
addItemToCart("Item 3", 5, 3);

removeItemFromCart(1);

updateItemQuantity(0, 5);
