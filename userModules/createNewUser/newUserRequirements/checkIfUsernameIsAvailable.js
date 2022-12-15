export default function checkIfUsernameIsAvailable(newUsername) {
    let users = JSON.parse(localStorage.getItem("users"));
    let errorBoxUsernameExists = document.getElementById("errorBoxUsernameExists");
    if (users.find(user => user.username === newUsername)) {
        errorBoxUsernameExists.innerHTML = "Username already exists, try another one!";
        return false;
    } else {
        errorBoxUsernameExists.innerHTML = "";
        return true;
    }
}