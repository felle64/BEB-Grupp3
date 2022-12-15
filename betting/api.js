const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let bet = urlParams.get("bet");
let wager = urlParams.get("wager");
let win = urlParams.get("win");


fetch(`http://80.98.140.31:5001/api/play?wager=${"2"}&bet=${"red"}`)
.then(res => res.json())
.then(data => {
    console.log("dataa",data);
})
