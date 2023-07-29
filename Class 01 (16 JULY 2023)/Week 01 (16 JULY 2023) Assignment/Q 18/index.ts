let placesToVisit: string[] = ["Landon", "Paris", "Makkah", "Islamabad", "Ottowa"];

console.log("Original order:", placesToVisit);
console.log("Alphabetical order without modifying the original list:", [...placesToVisit].sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order without modifying the original list:", [...placesToVisit].sort().reverse());
console.log("Original order:", placesToVisit);
console.log("Reversed order modifying the original list:", placesToVisit.reverse());
console.log("Reverse the order of the list again and get original order:", placesToVisit.reverse());
console.log("Alphabetical order modifying the original list:", placesToVisit.sort());
console.log("Reverse alphabetical order modifying the original list:", placesToVisit.sort().reverse());
