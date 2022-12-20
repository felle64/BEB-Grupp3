import buildWheel from "./modules/wheel.js";
import printBettingForm from "./modules/printBettingForm.js";
import printBCLoggedIn from "./modules/printBCLoggedIn.js";

export default function logInSuccessContent() {
    let currentUser = localStorage.getItem("currentUser");
    let innerHTML = ""
    
    // innerHTML +=`
    //     <div>
    //     <h2>Welcome to the page ${currentUser}!</h2>
    //     <p>You have successfully logged in and are now able to enjoy this custom quote.</p>
    //     <q>Wake up, ${currentUser}... <br> The Matrix has you... <br> Follow the white rabbit. 
    //     <br><br><br>
    //     Knock, knock, ${currentUser}.</q>
    //     </div>
    //     `;

    innerHTML += '<div id="gameDiv">';

    innerHTML += '<div id="rouletteDiv">';
    //Need printBettingForm.js from PR #78
    innerHTML += '</div>';

    innerHTML += printBettingForm()

    innerHTML += '</div>';
    innerHTML += '<div id="blockHistory">'

/*     //fake blockchain data
    innerHTML += `<div class="listBlock">
    <p>2022-12-19 01:18</p>
    <p>User BEEP bet 2 tokens on red</p>
    <p>Outcome: WIN</p>
    </div>
    <div class="listBlock">
    <p>2022-12-19 01:17</p>
    <p>User BOOP bet 2 tokens on red</p>
    <p>Outcome: WIN</p>
    </div>
    <div class="listBlock">
    <p>2022-12-19 01:16</p>
    <p>User BEEP bet 1 tokens on red</p>
    <p>Outcome: LOSS</p>
    </div>
    <div class="listBlock">
    <p>2022-12-19 01:15</p>
    <p>User BUMPO bet 1 tokens on red</p>
    <p>Outcome: LOSS</p>
    </div>
    <div class="listBlock">
    <p>2022-12-19 01:14</p>
    <p>User MEEPO bet 2 tokens on red</p>
    <p>Outcome: WIN</p>
    </div>
    `; */
    innerHTML += printBCLoggedIn();
    innerHTML += '</div>';

    
    //let betBtn = document.getElementById("betBtn");
    //betBtn.addEventListener("click", () => getResult());
   
    return innerHTML;
}
