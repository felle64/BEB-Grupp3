export default function deposit(){
    console.log("funktionen");
    let depositForm = `
    <div id="depositWrapper">
    <h2>Deposit</h2>

    <form id="depositForm">
        <div class="inputField">
            <label for="depositSek">Deposit SEK:</label><br>
            <input type="text" name="newUserName" id="depositSek">
        </div>
        <br>
        <button type="submit" id="depositSekBtn">Deposit</button>
        <button id="closeDepositForm">Close</button>
    </form>
      `;
    return depositForm
}