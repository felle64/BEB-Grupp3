import pageUnknownContent from "./pageContent/pageLoggedOut/pageUnknown/modules/pageUnknown.js"
import createNewAccount from "../userModules/createNewUser/createNewAccountBtn.js";
import logInSuccessContent from "./pageContent/pageLoggedIn/logInSuccessContent.js";
import buildWheel from "./pageContent/pageLoggedIn/modules/wheel.js";
import createNewUserText from "./pageContent/pageLoggedOut/createNewUserContent.js";
import betBtnEl from "./pageContent/pageLoggedIn/modules/betBtn.js";
import failedText from "./pageContent/pageLoggedOut/pageUnknown/failedLoginText.js";




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
            failedText();
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
            createNewUserText();

            

            let closeCreateUserForm = document.getElementById("closeCreateUserForm");
            closeCreateUserForm.addEventListener("click", ()=>{
                state="unknown";
                printPage(state);
            });

            let createNewAccountBtn = document.getElementById("createNewAccountBtn");
            createNewAccountBtn.addEventListener("click", createNewAccount);
            
            
            break;
        }
        default: {
            console.log("Something is wrong with the state/switch");
        }
    };
};