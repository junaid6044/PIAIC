var dinnerGuests = ["Ibtisam", "Ali", "Ahmad"];
var invitationMessages = dinnerGuests.map(function (guest) { return "Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place on Saturday. It would be an honor to have you join us.\nSincerely, [Muhammad Junaid]\n"); }).join("\n");
console.log("Invitation Messages:");
console.log(invitationMessages);
console.log("Number of people invited to dinner: ".concat(dinnerGuests.length));
