var dinnerGuests = ["Ibtisam", "Imran", "Ali"];
var guestWhoCantMakeIt = dinnerGuests[1];
dinnerGuests[1] = "Hamza";
console.log("\n".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
console.log("\nInvitations to dinner:\n");
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have a conversation with you.\n\nSincerely, [Muhammad Junaid]\n"));
});
