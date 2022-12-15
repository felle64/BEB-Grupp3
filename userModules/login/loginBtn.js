export default function login(e) {
    e.preventDefault();
    users = JSON.parse(localStorage.getItem("users"));
    let logInResultSuccess = users.find(user => user.username === userName.value && user.password === userPassword.value);

    if (logInResultSuccess) {
        state = "logInSuccess";
        localStorage.setItem("state", state);
        currentUser = userName.value;
        localStorage.setItem("currentUser", currentUser);
        printPage(state);
        printHeader(state);
    } else {
        state = "failedLogInAttempt";
        localStorage.setItem("state", state);
        printPage(state);
        printHeader(state);
    }
}