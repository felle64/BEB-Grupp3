import userClass from "./userClass.js";

export default function getUserObjectFromUserUUID() {
    let currentUserUUID = localStorage.getItem("currentUser");
    let users = JSON.parse(localStorage.getItem("users"));
    let foundUser = users.find(user => {
        return user.uuid === currentUserUUID;
    })

    let currentUser = new userClass(foundUser.username);

    //UUID first since it's used as salt for the hashing
    currentUser.uuid = foundUser.uuid;
    currentUser.password = foundUser.password;
    currentUser.balance = foundUser.balance;


    return currentUser
}