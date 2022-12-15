import checkIfUsernameIsAvailable from './newUserRequirements/checkIfUsernameIsAvailable'
import checkPasswordStrength from './newUserRequirements/checkPasswordStrength'
import newUserNameLengthCheck from './newUserRequirements/newUsernameLengthCheck'

export default function createNewAccount(e) {
    e.preventDefault();
    //If username and password input match conditions to create new user, push new user to LocalStorage
    if (checkIfUsernameIsAvailable(newUserName.value) && newUserNameLengthCheck(newUserName.value) && checkPasswordStrength(newUserPassword.value)) {

        let newUser = {
            username: newUserName.value,
            password: newUserPassword.value
        }
        users = JSON.parse(localStorage.getItem("users"));
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Go back to "start page"
        state = "unknown";
        localStorage.setItem("state", state);
        printPage(state);
        printHeader(state);

    } else {
        // Run conditions to display the errors that caused the if statement to fail
        // createNewUserForm.reset();
        newUserNameLengthCheck(newUserName.value);
        checkPassword(newUserPassword.value);
        checkIfUsersExists(newUserName.value);
    };
}