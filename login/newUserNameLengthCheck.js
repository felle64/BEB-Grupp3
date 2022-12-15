export default function newUsernameLengthCheck(newUsername) {
    let mnlen = 4;
    let mxlen = 10;
    let errorBoxNewUsernameLength = document.getElementById("errorBoxNewUsernameLength");
    if (newUsername.value.length < mnlen || newUsername.value.length > mxlen) {
        errorBoxNewUsernameLength.innerHTML = ("Username needs to be " + mnlen + " to " + mxlen + " characters.");
        return false;
    }
    else {
        errorBoxNewUsernameLength.innerHTML = "";
        return true;
    }
}