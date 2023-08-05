var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Landon", "Paris", "Makkah", "Islamabad", "Ottowa"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order without modifying the original list:", __spreadArray([], placesToVisit, true).sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order without modifying the original list:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original order:", placesToVisit);
console.log("Reversed order modifying the original list:", placesToVisit.reverse());
console.log("Reverse the order of the list again and get original order:", placesToVisit.reverse());
console.log("Alphabetical order modifying the original list:", placesToVisit.sort());
console.log("Reverse alphabetical order modifying the original list:", placesToVisit.sort().reverse());
