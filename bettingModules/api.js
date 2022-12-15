const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let bet = urlParams.get("bet");
let wager = urlParams.get("wager");
let win = urlParams.get("win");
let betInput = document.getElementById("betInput");
let wagerInput = document.getElementById("wagerInput");
let betButton = document.getElementById("betButton");
let wagerButton =document.getElementById("wagerButton");
let bet1 = "red";

//Funkar inte
betButton.addEventListener("click",() => {
    //console.log("Klick")
    console.log(betInput);

});
wagerButton.addEventListener("click",()=>{
    console.log(wagerInput);
})

//Funkar
fetch(`http://80.98.140.31:5001/api/play?wager=${"2"}&bet=${bet1}`)
.then(res => res.json())
.then(data => {
    console.log("dataa",data);
})
