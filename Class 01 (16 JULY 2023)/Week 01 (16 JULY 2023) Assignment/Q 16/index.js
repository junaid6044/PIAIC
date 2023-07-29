var dinnerGuests = ["Ibtisam", "Imran", "Ali"];
var updatedDinnerGuests = dinnerGuests.filter(function (name) { return name !== "Imran"; });
var guestWhoCantMakeIt = dinnerGuests[1];
console.log("\n".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
console.log("\nGreat news! We found a bigger dinner table.");
updatedDinnerGuests.unshift("Ahmad");
var newGuestMiddle = "Haroon";
var middleIndex = Math.floor(updatedDinnerGuests.length / 2);
updatedDinnerGuests.splice(middleIndex, 0, newGuestMiddle);
var newGuestEnd = "Usama";
updatedDinnerGuests.push(newGuestEnd);
console.log("\nInvitations to dinner:");
for (var _i = 0, updatedDinnerGuests_1 = updatedDinnerGuests; _i < updatedDinnerGuests_1.length; _i++) {
    var guest = updatedDinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely, [Muhammad Junaid]\n"));
}
