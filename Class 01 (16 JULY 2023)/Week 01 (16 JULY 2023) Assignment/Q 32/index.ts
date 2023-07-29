let current_users: string[] = ['Ibtisam', 'Ahmad', 'Ali', 'Ahsan', 'Umar'];
let new_users: string[] = ['Umair', 'Ibtisam', 'Hamza', 'ali', 'Awais'];

for (let newUser of new_users) {

    let lowercaseNewUser = newUser.toLowerCase();
    let lowercaseCurrentUsers = current_users.map(user => user.toLowerCase());
    let isUsernameTaken = lowercaseCurrentUsers.indexOf(lowercaseNewUser) !== -1

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
