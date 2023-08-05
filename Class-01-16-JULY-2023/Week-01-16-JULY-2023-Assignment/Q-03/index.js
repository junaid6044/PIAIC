var Name = "Muhammad Junaid";
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
}
console.log("Lowercase Name: ", Name.toLowerCase());
console.log("Uppercase Name: ", Name.toUpperCase());
console.log("Titlecase name: ", toTitleCase(Name));
