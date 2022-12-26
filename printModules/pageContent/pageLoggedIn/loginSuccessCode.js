import buildWheel from "./modules/wheel.js";
import betBtnEl from "./modules/betBtn.js";
export default function loginSuccessCode() {
    localStorage.setItem("wheelStatus", "still");
    buildWheel();
    let betBtn = document.getElementById("betBtn");
    //let wagerInput = document.getElementById("wagerInput");
    //let betInput = document.getElementById("betInput");
    //let wagerInputValue = wagerInput.value;
    //let betInputValue = betInput.value;
    betBtn.addEventListener("click", betBtnEl);
    //betBtnEl(wagerInput, betInput);

    let btnLow = document.getElementById("btnLow");
    btnLow.addEventListener("click", e => selectBet(btnLow));

    let btnHigh = document.getElementById("btnHigh");
    btnHigh.addEventListener("click", e => selectBet(btnHigh));

    let btnOdd = document.getElementById("btnOdd");
    btnOdd.addEventListener("click", e => selectBet(btnOdd));

    let btnEven = document.getElementById("btnEven");
    btnEven.addEventListener("click", e => selectBet(btnEven));

    let btnRed = document.getElementById("btnRed");
    btnRed.addEventListener("click", e => selectBet(btnRed));

    let btnBlack = document.getElementById("btnBlack");
    btnBlack.addEventListener("click", e => selectBet(btnBlack));

    let btnGreen = document.getElementById("btnGreen");
    btnGreen.addEventListener("click", e => selectBet(btnGreen));

    let btnNumber = document.getElementById("btnNumber");
    btnNumber.addEventListener("click", e => selectBet(btnNumber));

    let betInput = document.getElementById("betInput");

    function selectBet(button) {
        console.log("button clicked", button.value);
        if (button.value == "number") {
            let betInput = document.getElementById("betInput");
            betInput.value = 1;
            betInput.max = 36;
            betInput.min = 0;
            betInput.type = "number";
            betInput.style.display = "block";
            toggleClicked(button);
        }
        else {
            let betInput = document.getElementById("betInput");
            betInput.style.display = "none";
            betInput.type = "text";
            betInput.value = button.value;
            toggleClicked(button);
        }
    }
    function toggleClicked(button) {
        let buttons = document.getElementsByClassName("bettingButton");
        console.log(typeof (buttons));
        console.log(buttons[0]);
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("clicked");
        }
        button.classList.add("clicked");
    }
}
