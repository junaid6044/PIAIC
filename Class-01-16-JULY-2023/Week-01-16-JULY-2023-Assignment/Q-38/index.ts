function describe_city(city: string, country: string = "Unknown"): void {
  console.log(`${city} is in ${country}.`);
}

describe_city("Faisalabad", "Pakistan");
describe_city("New York", "United States");
describe_city("Sydney");
