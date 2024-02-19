// Array of animals with a common characteristic
var animals = ['Dog', 'Cat', 'Rabbit'];
console.log("Names of animals with a common characteristic:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i].toLowerCase(), " would make a great pet."));
}
console.log("\nAny of these animals would make a great pet!");
