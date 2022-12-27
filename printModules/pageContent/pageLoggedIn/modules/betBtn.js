import getResult from "../../../../bettingModules/getResult.js";
import addBlock from "../../../../chainModules/addBlock.js";
import formatBetData from "./formatBetData.js";
import printBCLoggedIn from "./printBCLoggedIn.js";
import printPage from "../../../printPage.js";
import getUserObjectFromUserUUID from "../../../../userModules/getUserObjectFromUserUUID.js";
import printHeader from "../../../printHeader.js";
import userClass from "../../../../userModules/userClass.js";
import updateUsers from "../../../../userModules/updateUser.js";
import rotateWheel from "./rotateWheel.js";

export default async function betBtn() {
    let wagerInput = document.getElementById("wagerInput").value;
    let betInput = document.getElementById("betInput").value;

    let blockHistory = document.getElementById("blockHistory")
    let resultBetDiv = document.getElementById("resultBetDiv");
    let currentUser = getUserObjectFromUserUUID();
    let wheelStatus = localStorage.getItem("wheelStatus");

    if (wagerInput <= currentUser.balance && wheelStatus != "spinning") {
        let data = await getResult(wagerInput, betInput);
        if (data.success === true) {
            resultBetDiv.innerHTML = "<p>ROLLING</p>"
            await rotateWheel(data.roll.number);
            await addBlock(formatBetData(data, currentUser.username))
            let chain = JSON.parse(localStorage.getItem('chain'))
            if (data.bet.win === true) { // lägg till lodräta sträck sen
                resultBetDiv.innerHTML = `<p>YOU WIN ${data.bet.payout - data.bet.wager} Lagom Token</p>`
                currentUser.updateBalance(data.bet.payout - data.bet.wager)
                updateUsers(currentUser)
                printHeader("logInSuccess")
                blockHistory.innerHTML = printBCLoggedIn();
                let latestBlock = document.getElementById("blockHistory").firstChild
                latestBlock.classList.add("blink");
            } else {
                resultBetDiv.innerHTML = `<p>YOU LOSE</p>`
                currentUser.updateBalance(-data.bet.wager)
                updateUsers(currentUser)
                printHeader("logInSuccess")
                blockHistory.innerHTML = printBCLoggedIn();
                let latestBlock = document.getElementById("blockHistory").firstChild
                latestBlock.classList.add("blink");
            }
        } else {
            console.log("fail")
            resultBetDiv.innerHTML = "<p>Invalid bet</p>"
        }


    }
    else {
        wheelStatus = localStorage.getItem("wheelStatus");
        if (wheelStatus == "spinning") {
            console.log("already playing")
        }
        else {
            resultBetDiv.innerHTML = `<p>You don't have enough tokens to bet ${wagerInput}</p>`;
        }
    }
}


