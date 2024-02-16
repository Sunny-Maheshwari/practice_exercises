// Define an array of guests to invite to dinner
var guests = ["Adnan Ali", "Muhammad Atif", "Usama Abbasi"];
// Function to print invitations
function printInvitations(guests) {
    console.log("Invitations:");
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var guest = guests_1[_i];
        console.log("Dear ".concat(guest, ", You are cordially invited to join me for dinner. It would be an honor to have your company.\n"));
    }
}
;
// Print initial invitations
printInvitations(guests);
// Simulate a guest who can't make it
var cantMakeIt = guests[1];
console.log("Unfortunately, ".concat(cantMakeIt, " can't make it to dinner.\n"));
// Replace the guest who can't make it with a new guest
var newGuest = "Rohit Kumar";
guests[1] = newGuest;
// Print updated invitations
console.log("Updated invitations after replacing ".concat(cantMakeIt, " with ").concat(newGuest, ":\n"));
printInvitations(guests);
