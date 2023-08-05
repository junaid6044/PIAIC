function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
  return magicians;
}

let magiciansArray: string[] = ["Ali", "Ahmad", "Ahsan", "Awais"];
magiciansArray = make_great(magiciansArray);
show_magicians(magiciansArray);
