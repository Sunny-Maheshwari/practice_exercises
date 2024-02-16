var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of guests to invite to dinner
var placesToVisit = ["Desert Safari", "Thar Desert", "Burj Khalifa", "Swat Valley", "Hunza Valley"];
// Iterate over the array and print a personalized invitation to each guest
for (var i = 0; i < placesToVisit.length; i++) {
    console.log("\n".concat(placesToVisit[i]));
}
// Create a copy of the array
var sortedPlaces = __spreadArray([], placesToVisit, true);
// Sort the copy alphabetically
sortedPlaces.sort();
// Print the sorted array
console.log("\n Places to Visit in UAE (Alphabetical Order):  \n");
for (var _i = 0, sortedPlaces_1 = sortedPlaces; _i < sortedPlaces_1.length; _i++) {
    var place = sortedPlaces_1[_i];
    console.log("".concat(place, " \n"));
}
var reversedPlaces = __spreadArray([], placesToVisit, true);
// Sort the copy in reverse alphabetical order
reversedPlaces.sort(function (a, b) { return b.localeCompare(a); });
// Print the sorted array
console.log("\n Places to Visit in UAE (Reverse Alphabetical Order): \n");
for (var _a = 0, reversedPlaces_1 = reversedPlaces; _a < reversedPlaces_1.length; _a++) {
    var place = reversedPlaces_1[_a];
    console.log("".concat(place, " \n"));
}
// console.log(placesToVisit)
// Create a copy of the array
var reversedPlace = __spreadArray([], reversedPlaces, true);
// Reverse the order of the copy
reversedPlace.reverse();
// Print the reversed array
console.log("Reversed Places to Visit in UAE:");
console.log(reversedPlace.sort());
