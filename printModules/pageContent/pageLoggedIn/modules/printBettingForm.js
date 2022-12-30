export default function printBettingForm() {

    let innerHTML = `
    <div id="bettingForm">
        <h3>Place bet</h3>

        <label>Your Wager: <input type="number" id="wagerInput" value=1> </label>
        
        <div class="bettingButtons">
          
            <button class="bettingButton" id="btnLow" value="low">Low</button>
            <button class="bettingButton" id="btnHigh" value="high">High</button>
            
            <button class="bettingButton" id="btnOdd" value="odd">Odd</button>
            <button class="bettingButton" id="btnEven" value="even">Even</button>
            
            <button class="bettingButton" id="btnRed" value="red">Red</button>
            <button class="bettingButton" id="btnBlack" value="black">Black</button>
           
            <button class="bettingButton" id="btnGreen" value="green">Green</button>
            <button class="bettingButton" id="btnNumber" value="number">Number</button>
        </div>
        <label id="betInputLabel" style="display:none;">Number: <input type="text" style="display:none;" id="betInput"></label>
        
       
        <button id="betBtn">Bet</button>
        <div id="resultBetDiv"></div>
    </div>
    `;
    return innerHTML;
}