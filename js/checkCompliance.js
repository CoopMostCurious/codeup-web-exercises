function checkCompliance (username, password) {
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    var passwordLength, usernameLength, passwordCondition, noWhiteSpace;

    if (password.length > 5){
        console.log('Password is at least 5 characters');
        passwordLength = true;
    } else passwordLength = false;

    if (username.length <= 20) {
        console.log('username is less than or equal to 20 characters');
        usernameLength = true;
        } else usernameLength = false;

    if (password.indexOf(username) < 0) {
        console.log('username is not in password');
        passwordCondition = true;
        } else passwordCondition = false;

    if (
        (username.trim() === username) && (password.trim() === password)
        ) {
            console.log('no white space in username or password');
            noWhiteSpace = true;
            } else noWhiteSpace = false;

    if (passwordLength && usernameLength && passwordCondition && noWhiteSpace) {
        console.log('all conditions are now met');
        } else console.log('one of the conditions is wrong, see above');
}

checkCompliance();
