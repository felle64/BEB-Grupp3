import checkIfUsernameIsAvailable from './newUserRequirements/checkIfUsernameIsAvailable.js'
import checkPasswordStrength from './newUserRequirements/checkPasswordStrength.js'
import newUserNameLengthCheck from './newUserRequirements/newUsernameLengthCheck.js'
import printPage from '../../printModules/printPage.js';
import addUser from './addUser.js';

export default function createNewAccount(e) {
    e.preventDefault();

    let newUserName = document.getElementById("newUserName");
    let newUserPassword = document.getElementById("newUserPassword");

    //If username and password input match conditions to create new user, push new user to LocalStorage
    if (checkIfUsernameIsAvailable(newUserName.value) && newUserNameLengthCheck(newUserName.value) && checkPasswordStrength(newUserPassword.value)) {
        addUser(newUserName.value, newUserPassword.value)

        // Go back to "start page"
        let state = "unknown";
        localStorage.setItem("state", state);
        printPage(state);

    } else {
        // Run conditions to display the errors that caused the if statement to fail
        // createNewUserForm.reset();
        newUserNameLengthCheck(newUserName.value);
        checkPasswordStrength(newUserPassword.value);
        checkIfUsernameIsAvailable(newUserName.value);
    };
}