const dinnerGuests: string[] = ["Ibtisam", "Imran", "Ali"];
const updatedDinnerGuests = dinnerGuests.filter(name => name !== "Imran");

const guestWhoCantMakeIt: string = dinnerGuests[1];

console.log(`\n${guestWhoCantMakeIt} can't make it to the dinner.`);
console.log("\nGreat news! We found a bigger dinner table.");

updatedDinnerGuests.unshift("Ahmad");

const newGuestMiddle: string = "Haroon";
const middleIndex: number = Math.floor(updatedDinnerGuests.length / 2);
updatedDinnerGuests.splice(middleIndex, 0, newGuestMiddle);

const newGuestEnd: string = "Usama";
updatedDinnerGuests.push(newGuestEnd);

console.log(`\nInvitations to dinner:`);
for (let guest of updatedDinnerGuests) {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely, [Muhammad Junaid]\n`);
}
