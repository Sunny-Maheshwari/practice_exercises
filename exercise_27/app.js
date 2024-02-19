// List of current users
var current_users = ['sunny', 'john', 'salman', 'admin', 'akram', 'kamran'];
var new_users = ['aman', 'khalid', 'sagar', 'KARAN', 'aKram'];
// Convert all usernames in current_users to lowercase
current_users = current_users.map(function (username) { return username.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert the new username to lowercase
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the new username exists in the list of current users
    if (current_users.includes(lowercase_new_user)) {
        console.log("Sorry, the username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
