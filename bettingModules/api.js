// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// let bet = urlParams.get("bet");
// let wager = urlParams.get("wager");
// let win = urlParams.get("win");

let wagerInput = document.getElementById("wagerInput")
let betInput = document.getElementById("betInput")
let betBtn = document.getElementById("betBtn")
betBtn.addEventListener("click", () => getResult());

// let betUser = "red";
// let wagerUser = 2;

function getResult() {
    console.log(wagerInput.value);
    console.log(betInput.value);
    const apiUrl = `http://80.98.140.31:5001/api/play?wager=${wagerInput.value}&bet=${betInput.value}`
    console.log(apiUrl);
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log("data", data);        
            let result = data.success;
            let win = data.roll.color;
            let balance = data.bet.payoutRate;
            let bet = data.bet.bet;
            let wager = data.bet.wager;
            let payout = data.bet.payout;
            let resultDiv = document.getElementById("resultDiv");
            resultDiv.innerHTML = `
            <p>Placed bet: ${result}</p>
            <p>Win: ${win}</p>
            <p>Payout rate: ${balance}</p>
            <p>Bet: ${bet}</p>
            <p>Wager: ${wager}</p>
            <p>Payout: ${payout}</p>
            `
        

            
        })
}

export {getResult};