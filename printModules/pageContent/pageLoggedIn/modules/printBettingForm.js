import getResult from "../../../../bettingModules/getResult.js";
export default function printBettingForm() {

    let contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = `<div>
<h3>Place bet</h3>
<input type="number" id="wagerInput">
<input type="text" id="betInput">
<button id="betBtn">Bet</button>
</div>`;

    let betBtn = document.getElementById("betBtn");
    betBtn.addEventListener("click", () => getResult());
}