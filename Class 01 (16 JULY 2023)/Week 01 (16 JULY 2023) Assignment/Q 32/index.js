var current_users = ['Ibtisam', 'Ahmad', 'Ali', 'Ahsan', 'Umar'];
var new_users = ['Umair', 'Ibtisam', 'Hamza', 'ali', 'Awais'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    var lowercaseNewUser = newUser.toLowerCase();
    var lowercaseCurrentUsers = current_users.map(function (user) { return user.toLowerCase(); });
    var isUsernameTaken = lowercaseCurrentUsers.indexOf(lowercaseNewUser) !== -1;
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
}
