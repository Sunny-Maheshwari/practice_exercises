// Define an array of guests to invite to dinner
var guests = ["Adnan Ali", "Muhammad Atif", "Usama Abbasi", "Salman Khan"];
console.log("Number of people invited to dinner: ".concat(guests.length));
// Function to print invitations
function printInvitations(guests) {
    console.log("Invitations:");
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var guest = guests_1[_i];
        console.log("\n Dear ".concat(guest, ", You are cordially invited to join me for dinner. It would be an honor to have your company.\n"));
    }
}
// Print initial invitations
printInvitations(guests);
