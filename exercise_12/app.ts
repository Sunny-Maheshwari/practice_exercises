// Define an array of guests to invite to dinner
let guests = ["Adnan Ali", "Muhammad Atif", "Usama Abbasi"];

// Function to print invitations
function printInvitations(guests){
    console.log("Invitations:");
    for (let guest of guests) {
        console.log(`Dear ${guest}, You are cordially invited to join me for dinner. It would be an honor to have your company.\n`);
    }
};

// Print initial invitations
printInvitations(guests);

// Simulate a guest who can't make it
let cantMakeIt = guests[1];
console.log(`Unfortunately, ${cantMakeIt} can't make it to dinner.\n`);

// Replace the guest who can't make it with a new guest
let newGuest = "Rohit Kumar";
guests[1] = newGuest;

// Print updated invitations
console.log(`Updated invitations after replacing ${cantMakeIt} with ${newGuest}:\n`);
printInvitations(guests);