import printPage from "../../../printPage.js";
import printHeader from "../../../printHeader.js";

export default function failedLoginCode(){
    let iGiveUpGiveMeANewAccount = document.getElementById("iGiveUpGiveMeANewAccount");
            iGiveUpGiveMeANewAccount.addEventListener("click", () => {
                let state = "createNewUser";
                localStorage.setItem("state", state);
                printPage(state);
                printHeader(state);
            });
}