function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
  console.log(`The shirt size is ${size}. \n "${message}"`);
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "TypeScript is awesome!");
