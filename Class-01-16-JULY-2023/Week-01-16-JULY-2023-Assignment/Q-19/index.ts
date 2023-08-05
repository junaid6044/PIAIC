const dinnerGuests: string[] = ["Ibtisam", "Ali", "Ahmad"];
const invitationMessages: string = dinnerGuests.map(guest => `Dear ${guest},\nYou are cordially invited to dinner at my place on Saturday. It would be an honor to have you join us.\nSincerely, [Muhammad Junaid]\n`).join("\n");

console.log("Invitation Messages:");
console.log(invitationMessages);
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);
