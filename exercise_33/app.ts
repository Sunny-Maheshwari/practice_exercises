function describe_city(city, country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Lahore', 'Pakistan');
describe_city('Abha');
describe_city('Mumbai', 'India');
