let car : string = 'Subaru';
let age : number = 25;
let fruits : string[] = ['Apple', 'Banana', 'Orange'];

console.log("Is car equal to 'Subaru'? I predict True.");
console.log(car == 'Subaru');

console.log("Is car not equal to 'Subaru'? I predict False.");
console.log(car != 'Subaru');

console.log("Is car in lowercase equal to 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car in uppercase not equal to 'SUBARU'? I predict False.");
console.log(car.toUpperCase() != 'SUBARU');

console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is age equal to 20? I predict False.");
console.log(age == 20);

console.log("Is car equal to 'Subaru' and age is greater than 21? I predict True.");
console.log(car == 'Subaru' && age > 21);

console.log("Is car not equal to 'Subaru' and age is greater than 21? I predict False.");
console.log(car != 'Subaru' && age > 21);

console.log("Is car equal to 'Subaru' or age is less than 18? I predict True.");
console.log(car == 'Subaru' || age < 18);

console.log("Is car equal to 'Toyota' or age is less than 18? I predict False.");
console.log(car == 'Toyota' || age < 18);

console.log("Is 'Banana' in the fruits array? I predict True.");
console.log(fruits.indexOf('Banana') !== -1);

console.log("Is 'Grapes' not in the fruits array? I predict True.");
console.log(fruits.indexOf('Grapes') === -1);
