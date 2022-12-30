import getResult from "../../bettingModules/getResult.js";
import addBlock from "../addBlock.js";
import formatBetData from "../../printModules/pageContent/pageLoggedIn/modules/formatBetData.js";
import printBCLoggedOut from "../../printModules/pageContent/pageLoggedOut/pageUnknown/modules/printBCLoggedOut.js";
import printBCLoggedIn from "../../printModules/pageContent/pageLoggedIn/modules/printBCLoggedIn.js";
import updateUsers from "../../userModules/updateUser.js";

export default async function autoBetter() {

    let bets = ["odd", "even", "low", "high", "red",
        "black", "green", "number"];

    //Get users from LS, to use later
    let users = JSON.parse(localStorage.getItem("users"));

    while (true) {
        //Get state
        let state = localStorage.getItem('state');

        //Wait a bit, and longer if logged in
        let waitTime = 12000;
        if (state == "logInSuccess") {
            waitTime = 24000;
        }
        await new Promise(r => setTimeout(r, waitTime));

        //Getting a random bet
        let randomBet = bets[Math.floor(Math.random() * bets.length)]
        //If bet is number, get a random number instead
        if (randomBet == "number") {
            randomBet = Math.floor(Math.random() * 36);
        }

        //Wagering 1-10
        let randomWager = Math.floor(Math.random() * 10) + 1;
        //10% chance of multiplying bet by 10
        if (Math.floor(Math.random() * 10) == 0) {
            randomWager *= 10;
        }

        //Get random index 0-2 for first 3 users
        let randomID = Math.floor(Math.random() * 3);

        let data = await getResult(randomWager, randomBet);
        if (data.success === true) {
            await addBlock(formatBetData(data, users[randomID]));
            printBC(state);
            let latestBlock = document.getElementById("blockHistory").firstChild
            latestBlock.classList.add("blink");
            if (data.bet.win === true) {
                users[randomID].balance += data.bet.payout - data.bet.wager;
            } else {
                users[randomID].balance -= data.bet.wager;
            }
            updateUsers(users[randomID]);
        }
    }
}

function printBC(state) {
    if (state == "logInSuccess") {
        blockHistory.innerHTML = printBCLoggedIn();
    }
    else {
        blockHistory.innerHTML = printBCLoggedOut();
    }
}