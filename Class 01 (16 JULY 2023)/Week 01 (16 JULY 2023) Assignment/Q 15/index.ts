const dinnerGuests: string[] =  ["Ibtisam", "Imran", "Ali"];
const guestWhoCantMakeIt: string = dinnerGuests[1];
dinnerGuests[1] = "Hamza";

console.log(`\n${guestWhoCantMakeIt} can't make it to the dinner.`);

console.log(`\nInvitations to dinner:\n`);

dinnerGuests.forEach(guest => {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have a conversation with you.\n\nSincerely, [Muhammad Junaid]\n`);
});