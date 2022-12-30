import loginSuccessCode from "./pageContent/pageLoggedIn/loginSuccessCode.js";
import logInSuccessContent from "./pageContent/pageLoggedIn/logInSuccessContent.js";
import createNewUserCode from "./pageContent/pageLoggedOut/createNewUserCode.js";
import createNewUserContent from "./pageContent/pageLoggedOut/createNewUserContent.js";
import failedLoginCode from "./pageContent/pageLoggedOut/pageUnknown/failedLoginCode.js";
import failedLoginContent from "./pageContent/pageLoggedOut/pageUnknown/failedLoginContent.js";
import pageUnknownCode from "./pageContent/pageLoggedOut/pageUnknown/pageUnknownCode.js";
import pageUnknownContent from "./pageContent/pageLoggedOut/pageUnknown/pageUnknownContent.js";

// Main function to display content in the "contentDiv" 
export default function printPage(state) {
    let currentUser = "";
    let contentDiv = document.getElementById('contentDiv');
    switch (state) {
        case "unknown": {
            contentDiv.innerHTML = pageUnknownContent();
            pageUnknownCode();
            break;
        }
        case "logInSuccess": {
            contentDiv.innerHTML = logInSuccessContent();
            loginSuccessCode();
            break;
        }
        case "failedLogInAttempt": {
            contentDiv.innerHTML = failedLoginContent();
            failedLoginCode();
            break;
        }
        case "createNewUser": {
            contentDiv.innerHTML = createNewUserContent();
            createNewUserCode();
            break;
        }
        default: {
            console.log("Something is wrong with the state/switch");
        }
    };
};