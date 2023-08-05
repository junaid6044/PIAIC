let Name: string = "Muhammad Junaid";

function toTitleCase(str: string) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log("Lowercase Name: ", Name.toLowerCase());
console.log("Uppercase Name: ", Name.toUpperCase());
console.log("Titlecase name: ", toTitleCase(Name));
