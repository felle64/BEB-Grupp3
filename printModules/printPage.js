import pageUnknownContent from "./pageContent/pageLoggedOut/pageUnknown/modules/pageUnknown.js"
import createNewAccount from "../userModules/createNewUser/createNewAccountBtn.js";
import logInSuccessContent from "./pageContent/pageLoggedIn/logInSuccessContent.js";
import buildWheel from "./pageContent/pageLoggedIn/modules/wheel.js";
import betBtnEl from "./pageContent/pageLoggedIn/modules/betBtn.js";

// Main function to display content in the "contentDiv" based on what state the page is in
export default function printPage(state) {
    let currentUser = "";
    let contentDiv = document.getElementById('contentDiv');
    switch (state) {
        case "unknown": {
            // console.log("hi from unkown");
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
            console.log("logInSuccess");
            contentDiv.innerHTML = logInSuccessContent();
            buildWheel();
            let betBtn = document.getElementById("betBtn");
            //let wagerInput = document.getElementById("wagerInput");
            //let betInput = document.getElementById("betInput");
            //let wagerInputValue = wagerInput.value;
            //let betInputValue = betInput.value;
            betBtn.addEventListener("click", betBtnEl);
            //betBtnEl(wagerInput, betInput);
           
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