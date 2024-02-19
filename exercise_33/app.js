function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Lahore', 'Pakistan');
describe_city('Abha');
describe_city('Mumbai', 'India');
