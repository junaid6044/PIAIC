export {};

const fruitsArray: string[] = ["apple", "banana", "cherry", "date", "grape"];
const longFruitsArray: string[] = fruitsArray.filter((fruit) => fruit.length > 5);
console.log(longFruitsArray);
