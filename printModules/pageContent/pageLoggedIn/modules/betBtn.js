import getResult from "../../../../bettingModules/getResult.js";
//Få den att print till sidan från api.js
//Få den att göra det genom en funktion


export default async function betBtn() {
    let wagerInput = document.getElementById("wagerInput").value;
    let betInput = document.getElementById("betInput").value;
    console.log(wagerInput);
    console.log(betInput);
    let resultBetDiv = document.getElementById("resultBetDiv");
    let data = await getResult(wagerInput, betInput)
    console.log(data);
    if (data.success === true) { if (data.bet.win === true) {
     resultBetDiv.innerHTML = `<p>YOU WIN ${data.bet.payout - data.bet.wager} Lagom Token</p>`   
    }else{
        resultBetDiv.innerHTML = `<p>YOU LOSE</p>`
    }
    
    }else{console.log("fail")}
}
