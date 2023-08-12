export {};
function suggestClothingBasedOnTemperature(temperature: number): string {
    if (temperature < 0) {
        return "It's very cold! Wear heavy winter clothes and layers.";
    } else if (temperature >= 0 && temperature < 15) {
        return "It's cold. Wear a warm coat, gloves, and a scarf.";
    } else if (temperature >= 15 && temperature < 25) {
        return "It's cool. A light jacket or sweater should be fine.";
    } else if (temperature >= 25 && temperature < 35) {
        return "It's mild. A t-shirt or light clothing would be comfortable.";
    } else {
        return "It's hot! Wear light cloth.";
    }
}

var userTemperature: number = 15;
var clothingSuggestion: string = suggestClothingBasedOnTemperature(userTemperature);
console.log(`Temperature: ${userTemperature}°C`);
console.log(`Clothing Suggestion: ${clothingSuggestion}`);
