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
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation to the two remaining guests
console.log(`\n${guests[0]} and ${guests[1]}, you're still invited to dinner.\n`);

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list to confirm
console.log("Updated guest list:", guests);