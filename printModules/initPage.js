// Check if a state i saved if local storage, 
// if not, save default state to local storage and print the page based on the default state.
// If a state is already in local storage print the page based on that state.

import printPage from "./printPage.js";
import printHeader from "./printHeader.js";



export default function initPage() {
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