// Array of animals with a common characteristic
let animals = ['Dog', 'Cat', 'Rabbit'];

console.log("Names of animals with a common characteristic:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
