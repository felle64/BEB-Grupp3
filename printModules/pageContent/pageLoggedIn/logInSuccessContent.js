import printBCLoggedIn from "./modules/printBCLoggedIn.js";
import printBettingForm from "./modules/printBettingForm.js";

export default function logInSuccessContent() {
    let innerHTML = ""


    innerHTML = `<div id="gameDiv">
    
                <div id="rouletteDiv"></div>
               
                ${printBettingForm()}
                </div>

              
                <div id="blockHistory">
                ${printBCLoggedIn()}
                </div>`;


    // innerHTML += '<div id="gameDiv">';

    // innerHTML += '<div id="rouletteDiv">';
    // //Need printBettingForm.js from PR #78
    // innerHTML += '';

    // innerHTML += printBettingForm()

    // innerHTML += '</div>';
    // innerHTML += '<div id="blockHistory">'


    // innerHTML += printBCLoggedIn();
    // innerHTML += '</div>';

    //let betBtn = document.getElementById("betBtn");
    //betBtn.addEventListener("click", () => getResult());

    return innerHTML;
}
