import printPage from "../../../printPage.js";

export default function pageUnknownCode() {
    let iWantToCreateAnAccountBtn = document.getElementById("iWantToCreateAnAccountBtn");
    iWantToCreateAnAccountBtn.addEventListener("click", () => {
        let state = "createNewUser";
        localStorage.setItem("state", state);
        printPage(state);
    });
}