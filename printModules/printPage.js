import pageUnknownContent from "./pageContent/pageLoggedOut/pageUnknown/modules/pageUnknown.js"
import createNewAccount from "../userModules/createNewUser/createNewAccountBtn.js";

// Main function to display content in the "contentDiv" based on what state the page is in
export default function printPage(state) {
    let currentUser = "";
    switch (state) {
        case "unknown": {
            // console.log("hi from unkown");
            let contentDiv = document.getElementById('contentDiv');
            contentDiv.innerHTML = pageUnknownContent();

            let iWantToCreateAnAccountBtn = document.getElementById("iWantToCreateAnAccountBtn");
            iWantToCreateAnAccountBtn.addEventListener("click", () => {
                state = "createNewUser";
                localStorage.setItem("state", state);
                printPage(state);
            });
            break;
        }
        case "logInSuccess": {
            // console.log("Hi from logInSuccess");
            currentUser = localStorage.getItem("currentUser");
            contentDiv.innerHTML = `
        <h2>Welcome to the page ${currentUser}!</h2>
        <p>You have successfully logged in and are now able to enjoy this custom quote.</p>
        <q>Wake up, ${currentUser}... <br> The Matrix has you... <br> Follow the white rabbit. 
        <br><br><br>
        Knock, knock, ${currentUser}.
        `;
            break;
        }
        case "failedLogInAttempt": {
            // console.log("Hi from failedLogInAttempt");
            contentDiv.innerHTML = `
        <div id="errorMessage">
        <h2>Wrong Credentials</h2>
        <p>Invalid username or password. <br>
          Try again or create a new account.
        </p>
        <button id="iGiveUpGiveMeANewAccount">I give up, give me a new account</button>
        </div>
        `;
            let iGiveUpGiveMeANewAccount = document.getElementById("iGiveUpGiveMeANewAccount");
            iGiveUpGiveMeANewAccount.addEventListener("click", () => {
                state = "createNewUser";
                localStorage.setItem("state", state);
                printPage(state);
                printHeader(state);
            });
            break;
        }
        case "createNewUser": {
            // console.log("Hi from CreateNewUser");
            contentDiv.innerHTML = `
        <h2>Create Account</h2>
       
        <form id="createNewUserForm">
            <div class="inputField">
                <label for="newUserName">Username:</label><br>
                <input type="text" name="newUserName" id="newUserName" required/>
            </div>
            <br>
            <div class="inputField">
                <label for="newUserPassword">Password:</label><br>
                <input type="password" name="newUserPassword" id="newUserPassword" required/>
            </div>
            <br>
            <button type="submit" id="createNewAccountBtn">Create New Account</button>
        </form>
        <div id="errorBox">
        <div id="errorBoxUsernameExists"></div>
        <div id="errorBoxNewUsernameLength"></div> 
        <div id="errorBoxNewPassword"></div> 
        </div>
              `;
            let createNewAccountBtn = document.getElementById("createNewAccountBtn");


            createNewAccountBtn.addEventListener("click", createNewAccount);
            break;
        }
        default: {
            console.log("Something is wrong with the state/switch");
        }
    };
};