export default function getUserObjectFromUserUUID() {
    let currentUserUUID = localStorage.getItem("currentUser");
    let users = JSON.parse(localStorage.getItem("users"));
    let foundUser = users.find(user => {
        return user.uuid === currentUserUUID;
    })
    return foundUser
}