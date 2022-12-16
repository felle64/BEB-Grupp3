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
    console.log(`http://80.98.140.31:5001/api/play?wager=${wagerInput.value}&bet=${betInput.value}`);
    fetch(`http://80.98.140.31:5001/api/play?wager=${wagerInput.value}&bet=${betInput.value}`)
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
        })
}
