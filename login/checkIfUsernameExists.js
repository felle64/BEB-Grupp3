export default function checkIfUsersExists(newUsername) {
    let users = JSON.parse(localStorage.getItem("users"));
    let errorBoxUserExists = document.getElementById("errorBoxUserExists");
    if (users.find(user => user.username === newUsername)) {
        errorBoxUserExists.innerHTML = "Username already exists, try another one!";
        return false;
    } else {
        errorBoxUserExists.innerHTML = "";
        return true;
    }
}