const dinnerGuests: string[] = ["Ibtisam", "Imran", "Ali", "Hamza"];

const guestWhoCantMakeIt: string = dinnerGuests[1];
console.log(`\n${guestWhoCantMakeIt} can't make it to the dinner.`);

dinnerGuests[1] = "Umar";
console.log("\nGood news! We found a bigger dinner table.");

dinnerGuests.unshift("Haris");
dinnerGuests.splice(Math.ceil(dinnerGuests.length / 2), 0, "Babar");
dinnerGuests.push("Awais");

console.log(`\nInvitations to dinner:`);
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely, [Muhammad Junaid]\n`);
}

console.log("\nUnfortunately, we can invite only two people for dinner.");


while (dinnerGuests.length > 2) {
    const removedGuest: string | undefined = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let remainingGuest of dinnerGuests) {
    console.log(`\n${remainingGuest}, you're still invited to dinner!`);
}

dinnerGuests.pop();
dinnerGuests.pop();

console.log("\nRemaining guests:", dinnerGuests);
