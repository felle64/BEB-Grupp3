import createNewAccount from "../../../userModules/createNewUser/createNewAccountBtn.js";
import printPage from "../../printPage.js";

export default function createNewUserCode() {
    let closeCreateUserForm = document.getElementById("closeCreateUserForm");
    closeCreateUserForm.addEventListener("click", () => {
        let state = "unknown";
        printPage(state);
    });

    let createNewAccountBtn = document.getElementById("createNewAccountBtn");
    createNewAccountBtn.addEventListener("click", createNewAccount);
}