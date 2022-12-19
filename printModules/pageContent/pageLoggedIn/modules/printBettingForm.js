import getResult from "../../../../bettingModules/getResult.js";
export default function printBettingForm() {

    let innerHTML = `<div>
<h3>Place bet</h3>
<input type="number" id="wagerInput">
<input type="text" id="betInput">
<button id="betBtn">Bet</button>
</div>`;
    return innerHTML;
}