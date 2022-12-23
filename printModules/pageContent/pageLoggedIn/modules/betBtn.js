import getResult from "../../../../bettingModules/getResult.js";
import addBlock from "../../../../chainModules/addBlock.js";
import formatBetData from "./formatBetData.js";
import printBCLoggedIn from "./printBCLoggedIn.js";
import printPage from "../../../printPage.js";
import getUserObjectFromUserUUID from "../../../../userModules/getUserObjectFromUserUUID.js";
import printHeader from "../../../printHeader.js";
import userClass from "../../../../userModules/userClass.js";
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
    let currentUser = getUserObjectFromUserUUID();
    console.log(data);
    if (data.success === true) {
        await addBlock(formatBetData(data, currentUser.username))
        let chain = JSON.parse(localStorage.getItem('chain'))
        console.log('EFTER ADD BLOCK', chain);
        if (data.bet.win === true) { // lägg till lodräta sträck sen
            resultBetDiv.innerHTML = `<p>YOU WIN ${data.bet.payout - data.bet.wager} Lagom Token</p>`
        } else {
            resultBetDiv.innerHTML = `<p>YOU LOSE</p>`
            console.log("currentUser",currentUser instanceof userClass); 
            currentUser.updateBalance(-data.bet.wager)
            //function för updateUsers
            function updateUsers (userUpdate){
                let users = JSON.parse(localStorage.getItem('users'))
                let foundUser = users.find(user => {
                    return user.uuid === currentUser.uuid;
                })
                let i = users.indexOf(foundUser);
                console.log(currentUser);
                users[i]=currentUser
                localStorage.setItem('users', JSON.stringify(users))
            }
             updateUsers(currentUser)
             printHeader("logInSuccess")
             console.log(currentUser.balance);
        }
    } else { console.log("fail") }
    blockHistory.innerHTML = printBCLoggedIn();
}


