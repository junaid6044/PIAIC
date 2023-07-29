function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Faisalabad", "Pakistan");
describe_city("New York", "United States");
describe_city("Sydney");
