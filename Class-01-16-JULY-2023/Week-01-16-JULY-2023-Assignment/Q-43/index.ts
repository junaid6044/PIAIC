function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let modifiedMagicians: string[] = [];
  for (let magician of magicians) {
    modifiedMagicians.push(`The Great ${magician}`);
  }
  return modifiedMagicians;
}

let magiciansArray: string[] = ["Ali", "Ahmad", "Ahsan", "Awais"];
let greatMagiciansArray: string[] = make_great([...magiciansArray]);
console.log("Original Magicians:");
show_magicians(magiciansArray);
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);
