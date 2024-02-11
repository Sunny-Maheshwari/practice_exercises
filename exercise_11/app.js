// Define an array of guests to invite to dinner
var guests = ["Adnan Ali", "Muhammad Atif", "Usama Abbasi"];
// Iterate over the array and print a personalized invitation to each guest
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", You are cordially invited to join me for dinner. It would be an honor to have your company.\n"));
}
