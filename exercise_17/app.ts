// Define an array of country objects
let countries= [
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
console.log(`\n Information about Countries: \n`);
for (let country of countries) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.country}`);
    console.log(`Population: ${country.contact_no}`);
    console.log(`Official Language: ${country.language}`);
    console.log();
}

console.log(countries[6])
