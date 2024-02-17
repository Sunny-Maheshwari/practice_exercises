// Define an array of guests to invite to dinner
let guests = ["Adnan Ali", "Muhammad Atif", "Usama Abbasi", "Salman Khan"];


console.log(`Number of people invited to dinner: ${guests.length}`);

// Function to print invitations
function printInvitations(guests) {
    console.log("Invitations:");
    for (let guest of guests) {
        console.log(`\n Dear ${guest}, You are cordially invited to join me for dinner. It would be an honor to have your company.\n`);
    }
}

// Print initial invitations
printInvitations(guests);