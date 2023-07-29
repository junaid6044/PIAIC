function order_sandwich(...items: string[]): void {
  console.log("Sandwich Order:");
  console.log("Bread");
  for (let item of items) {
    console.log(item);
  }
  console.log("Bread\n");
}

order_sandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
order_sandwich("Chicken", "Lettuce", "Pickles");
order_sandwich("Ham", "Cheese");
