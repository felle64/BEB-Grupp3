const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let bet = urlParams.get("bet");
let wager = urlParams.get("wager");
let win = urlParams.get("win");

let betUser = "red";
let wagerUser = 2;


fetch(`http://80.98.140.31:5001/api/play?wager=${wagerUser}&bet=${betUser}`)
.then(res => res.json())
.then(data => {
    console.log("dataa",data);
})
