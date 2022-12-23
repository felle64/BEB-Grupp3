import printPage from "../../printModules/printPage.js";
import printHeader from "../../printModules/printHeader.js";
import hashPassword from "../hashPassword.js";

export default async function loginBtn(e) {
    //e.preventDefault(); 
    let userPassword = document.getElementById("userPassword").value;
    let userName = document.getElementById("userName").value;
    let users = JSON.parse(localStorage.getItem("users"));

    //Basically copied the top answer here
    //https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
    //Returns either a user or undefined
    let foundUser = users.find(user => {
        return user.username === userName
    });

    //Initially false, and only set to true if user is found
    //and password hashes matches
    let logInResultSuccess = false;

    //this can probably be rewritten to be nicer
    //when the find function above doesn't find anything, it returns undefined, so i'm checking for that here
    if (typeof foundUser !== 'undefined') {
        let hashedPassword = await hashPassword(userPassword, foundUser);
        if (hashedPassword == foundUser.password) {
            logInResultSuccess = true;
        }
    }
    else {//if no user was found, just to test
        //console.log("user was not found");
    }

    if (logInResultSuccess) {
        let state = "logInSuccess";
        localStorage.setItem("state", state);
        let currentUser = foundUser.uuid;
        localStorage.setItem("currentUser", currentUser);
        printPage(state);
        printHeader(state);
    } else {
        let state = "failedLogInAttempt";
        localStorage.setItem("state", state);
        printPage(state);
        printHeader(state);
    }
}