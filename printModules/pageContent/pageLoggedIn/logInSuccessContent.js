import buildWheel from "./modules/wheel.js";

export default function logInSuccessContent() {
    let currentUser = localStorage.getItem("currentUser");
    let innerHTML = `
        <h2>Welcome to the page ${currentUser}!</h2>
        <p>You have successfully logged in and are now able to enjoy this custom quote.</p>
        <q>Wake up, ${currentUser}... <br> The Matrix has you... <br> Follow the white rabbit. 
        <br><br><br>
        Knock, knock, ${currentUser}.</q>
        `;
    //Need printBettingForm.js from PR #78
    //innerHTML += printBettingForm()
    innerHTML += '<div id="rouletteDiv"></div>';
    return innerHTML;
}