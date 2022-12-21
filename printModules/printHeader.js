//Switch
import validateChain from "../chainModules/validateChain.js";
import printPage from "./printPage.js";

export default function printHeader(state) {
    let currentUser = "";
    if (state !== "logInSuccess") {

        headerDiv.innerHTML = `<div id="validationDiv"><div id="validationResultDiv"></div><button id="validationButton">Validate</button></div>
      <form id="logInForm">
        <div class="inputField">
          <label for="userName">Username:</label><br>
          <input type="text" name="userName" id="userName" />
        </div>
        <br>
        <div class="inputField">
          <label for="userPassword">Password:</label><br>
          <input type="password" name="userPassword" id="userPassword" />
        </div>
        <br>
        <button type="submit" id="logInBtn">Log In</button>
      </form>
      `
      validateChain();
        let logInBtn = document.getElementById("logInBtn");
        let userName = document.getElementById("userName");
        let userPassword = document.getElementById("userPassword");

        logInBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let users = JSON.parse(localStorage.getItem("users"));
            let logInResultSuccess = users.find(user => user.username === userName.value && user.password === userPassword.value);

            if (logInResultSuccess) {
                state = "logInSuccess";
                localStorage.setItem("state", state);
                currentUser = userName.value;
                localStorage.setItem("currentUser", currentUser);
                printPage(state);
                printHeader(state);
            } else {
                state = "failedLogInAttempt";
                localStorage.setItem("state", state);
                printPage(state);
                printHeader(state);
            }
        });

    } else {
        currentUser = localStorage.getItem("currentUser");
        headerDiv.innerHTML = `<div id="validationDiv"><div id="validationResultDiv"></div><button id="validationButton">Validate</button></div>
        <p>You are logged in as: ${currentUser}</p>
        <button id="logOutBtn">Log Out</button>
        `
        validateChain();
        let logOutBtn = document.getElementById("logOutBtn");
        logOutBtn.addEventListener("click", () => {

            state = "unknown"
            localStorage.setItem("state", state);
            printPage(state);
            printHeader(state);
        });
    };
};