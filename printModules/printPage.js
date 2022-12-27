import pageUnknownContent from "./pageContent/pageLoggedOut/pageUnknown/pageUnknownContent.js"
//import createNewAccount from "../userModules/createNewUser/createNewAccountBtn.js";
import logInSuccessContent from "./pageContent/pageLoggedIn/logInSuccessContent.js";
//import buildWheel from "./pageContent/pageLoggedIn/modules/wheel.js";
import createNewUserText from "./pageContent/pageLoggedOut/createNewUserContent.js";
//import betBtnEl from "./pageContent/pageLoggedIn/modules/betBtn.js";
import failedLoginContent from "./pageContent/pageLoggedOut/pageUnknown/failedLoginContent.js";
import failedLoginCode from "./pageContent/pageLoggedOut/pageUnknown/failedLoginCode.js";
import pageUnknownCode from "./pageContent/pageLoggedOut/pageUnknown/pageUnknownCode.js";
import loginSuccessCode from "./pageContent/pageLoggedIn/loginSuccessCode.js";
import createNewUserCode from "./pageContent/pageLoggedOut/createNewUserCode.js";
import createNewUserContent from "./pageContent/pageLoggedOut/createNewUserContent.js";

// Main function to display content in the "contentDiv" 
export default function printPage(state) {
    let currentUser = "";
    let contentDiv = document.getElementById('contentDiv');
    switch (state) {
        case "unknown": {
            // console.log("hi from unkown");
            contentDiv.innerHTML = pageUnknownContent();
            pageUnknownCode();
            break;
        }
        case "logInSuccess": {
            // console.log("Hi from logInSuccess");
            console.log("logInSuccess");
            contentDiv.innerHTML = logInSuccessContent();
            loginSuccessCode();
            break;
        }
        case "failedLogInAttempt": {
            // console.log("Hi from failedLogInAttempt");
            contentDiv.innerHTML = failedLoginContent();
            failedLoginCode();
            break;
        }
        case "createNewUser": {
            // console.log("Hi from CreateNewUser");
            contentDiv.innerHTML = createNewUserContent();
            createNewUserCode();
            break;
        }
        default: {
            console.log("Something is wrong with the state/switch");
        }
    };
};