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
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!\n");
// Adding three more guests
guests.unshift("Salma Abbasi"); // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Jaipal"); // Add to the middle
guests.push("Kamran Ghulam"); // Add to the end
// Print invitations for the expanded guest list
console.log("Invitations for the expanded guest list:");
printInvitations(guests);
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
// Remove guests until only two names remain in the list
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation to the two remaining guests
console.log("\n".concat(guests[0], " and ").concat(guests[1], ", you're still invited to dinner.\n"));
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the empty list to confirm
console.log("Updated guest list:", guests);
