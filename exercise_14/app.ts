// Define an array of guests to invite to dinner
let placesToVisit = ["Desert Safari", "Thar Desert", "Burj Khalifa", "Swat Valley", "Hunza Valley"];

// Iterate over the array and print a personalized invitation to each guest
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(`\n${placesToVisit[i]}`);
}

// Create a copy of the array
let sortedPlaces = [...placesToVisit];

// Sort the copy alphabetically
sortedPlaces.sort();

// Print the sorted array
console.log("\n Places to Visit in UAE (Alphabetical Order):  \n");
for (let place of sortedPlaces) {
    console.log(`${place} \n`);
}


let reversedPlaces = [...placesToVisit];

// Sort the copy in reverse alphabetical order
reversedPlaces.sort((a, b) => b.localeCompare(a));

// Print the sorted array
console.log("\n Places to Visit in UAE (Reverse Alphabetical Order): \n");
for (let place of reversedPlaces) {
    console.log(`${place} \n`);
}

// console.log(placesToVisit)


// Create a copy of the array
let reversedPlace = [...reversedPlaces];

// Reverse the order of the copy
reversedPlace.reverse();

// Print the reversed array
console.log("Reversed Places to Visit in UAE:");
console.log(reversedPlace.sort());