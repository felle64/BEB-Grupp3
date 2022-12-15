export default function newUserNameLengthCheck(newUserName) {
    let mnlen = 4;
    let mxlen = 10;
    let errorBoxNewUserNameLength = document.getElementById("errorBoxNewUserNameLength");
    if (newUserName.value.length < mnlen || newUserName.value.length > mxlen) {
        errorBoxNewUserNameLength.innerHTML = ("Username needs to be " + mnlen + " to " + mxlen + " characters.");
        return false;
    }
    else {
        errorBoxNewUserNameLength.innerHTML = "";
        return true;
    }
}