import printPage from "./printPage.js";
import printHeader from "./printHeader.js";

export default async function initPage() {
    let state = "unknown";
    if (!localStorage.getItem("state")) {

        localStorage.setItem("state", state);
        printPage(state);
        printHeader(state);
    } else {
        state = localStorage.getItem("state");
        printPage(state);
        printHeader(state);
    };
}