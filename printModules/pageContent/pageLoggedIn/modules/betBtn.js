import getResult from "../../../../bettingModules/getResult.js";
import addBlock from "../../../../chainModules/addBlock.js";
import formatBetData from "./formatBetData.js";
import printBCLoggedIn from "./printBCLoggedIn.js";
import printPage from "../../../printPage.js";
//Få den att print till sidan från api.js
//Få den att göra det genom en funktion


export default async function betBtn() {
    let wagerInput = document.getElementById("wagerInput").value;
    let betInput = document.getElementById("betInput").value;
    let blockHistory = document.getElementById("blockHistory")
    console.log(wagerInput);
    console.log(betInput);
    let resultBetDiv = document.getElementById("resultBetDiv");
    let data = await getResult(wagerInput, betInput)
    let currentUser = localStorage.getItem('currentUser');
    console.log(data);
    if (data.success === true) {
        await addBlock(formatBetData(data, currentUser))
        let chain = JSON.parse(localStorage.getItem('chain'))
        console.log('EFTER ADD BLOCK', chain);
        if (data.bet.win === true) { // lägg till lodräta sträck sen
            resultBetDiv.innerHTML = `<p>YOU WIN ${data.bet.payout - data.bet.wager} Lagom Token</p>`
        } else {
            resultBetDiv.innerHTML = `<p>YOU LOSE</p>`
        }
    } else { console.log("fail") }
    blockHistory.innerHTML = printBCLoggedIn();
}


