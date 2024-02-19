// List of current users
let current_users = ['sunny', 'john', 'salman', 'admin', 'akram', 'kamran'];

let new_users = ['aman', 'khalid', 'sagar', 'KARAN', 'aKram'];

// Convert all usernames in current_users to lowercase
current_users = current_users.map(username => username.toLowerCase());

for (let new_user of new_users) {
    // Convert the new username to lowercase
    let lowercase_new_user = new_user.toLowerCase();

    // Check if the new username exists in the list of current users
    if (current_users.includes(lowercase_new_user)) {
        console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
