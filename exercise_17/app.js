// Define an array of country objects
var countries = [
    {
        name: "Sunny",
        country: "Pakistan",
        contact_no: 331000000,
        language: "English"
    },
    {
        name: "Adeel",
        country: "Pakistan",
        contact_no: 331000000,
        language: "English"
    },
    {
        name: "France",
        country: "Paris",
        contact_no: 65273511,
        language: "French"
    },
    {
        name: "Kamran",
        country: "Germany",
        contact_no: 83783942,
        language: "German"
    },
    {
        name: "Usama",
        country: "Japan",
        contact_no: 126476461,
        language: "Japanese"
    }
];
// Print information about each country
console.log("\n Information about Countries: \n");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("Country: ".concat(country.name));
    console.log("Capital: ".concat(country.country));
    console.log("Population: ".concat(country.contact_no));
    console.log("Official Language: ".concat(country.language));
    console.log();
}
console.log(countries[6]);
