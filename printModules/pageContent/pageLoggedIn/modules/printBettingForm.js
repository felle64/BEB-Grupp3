import getResult from "../../../../bettingModules/getResult.js";
export default function printBettingForm() {

    let innerHTML = `
    <div id="bettingForm">
        <h3>Place bet</h3>
        <input type="number" id="wagerInput" placeholder="You Wager">
        <input type="text" id="betInput" placeholder="What you want to bet on">
        <button id="betBtn">Bet</button>
    </div> 
    <div id="resultBetDiv"></div>`;
    return innerHTML;
}