function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "United States");
let city3 = city_country("Tokyo", "Japan");

console.log(city1);
console.log(city2);
console.log(city3);
