//Switch
import validateChain from "../chainModules/validateChain.js";
import printPage from "./printPage.js";
import loginBtn from "../userModules/login/loginBtn.js";
import getUserObjectFromUserUUID from "../userModules/getUserObjectFromUserUUID.js";
import deposit from "./pageContent/pageLoggedIn/modules/deposit.js";

export default function printHeader(state) {


  if (state !== "logInSuccess") {

    headerDiv.innerHTML = `<div id="validationDiv"><div id="validationResultDiv"></div><button id="validationButton">Validate</button></div>
      <form id="logInForm">
        <span class="inputField">
          <label for="userName">Username:</label>
          <input type="text" name="userName" id="userName" />
        </span>
        <br><br>
        <span class="inputField">
          <label for="userPassword">Password:</label>
          <input type="password" name="userPassword" id="userPassword" />
        </span>
        
      </form>
      <button type="submit" id="logInBtn">Log In</button>
      `
      validateChain()

    let validationButton = document.getElementById("validationButton");
      validationButton.addEventListener("click", () => {
        validateChain();
      });

    let logInBtn = document.getElementById("logInBtn");

    logInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      loginBtn(e);
    });

  } else {


    let foundUser = getUserObjectFromUserUUID();

    headerDiv.innerHTML = `<div id="deposit"><button id="depositBtn">Deposit</button></div><div id="validationDiv"><div id="validationResultDiv"></div><button id="validationButton">Validate</button></div>
        <p>You are logged in as: ${foundUser.username}</p>
        <p>Account Balance: ${foundUser.balance}</p>
        <button id="logOutBtn">Log Out</button>
        `
        validateChain()
        let depositBtn = document.getElementById("depositBtn");
        depositBtn.addEventListener("click", () => { 
          console.log("deposit");
          deposit();
        });
        
        validationButton.addEventListener("click", () => {
          validateChain();
        });


    let logOutBtn = document.getElementById("logOutBtn");
    logOutBtn.addEventListener("click", () => {

      state = "unknown"
      localStorage.setItem("state", state);
      printPage(state);
      printHeader(state);
    });
  };
};