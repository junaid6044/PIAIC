var dinnerGuests = ["Ibtisam", "Imran", "Ali", "Hamza"];
var guestWhoCantMakeIt = dinnerGuests[1];
console.log("\n".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
dinnerGuests[1] = "Umar";
console.log("\nGood news! We found a bigger dinner table.");
dinnerGuests.unshift("Haris");
dinnerGuests.splice(Math.ceil(dinnerGuests.length / 2), 0, "Babar");
dinnerGuests.push("Awais");
console.log("\nInvitations to dinner:");
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely, [Muhammad Junaid]\n"));
}
console.log("\nUnfortunately, we can invite only two people for dinner.");
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var remainingGuest = dinnerGuests_2[_a];
    console.log("\n".concat(remainingGuest, ", you're still invited to dinner!"));
}
dinnerGuests.pop();
dinnerGuests.pop();
console.log("\nRemaining guests:", dinnerGuests);
