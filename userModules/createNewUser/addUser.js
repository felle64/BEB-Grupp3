import hashPassword from "../hashPassword.js";
import userClass from "../userClass.js";

export default async function addUser(username, password) {
    //HÄMTA
    let users = JSON.parse(localStorage.getItem('users'));
    let newUser = new userClass(username);

    //UUID first since it's used as salt for the hashing
    newUser.uuid = await self.crypto.randomUUID();
    newUser.password = await hashPassword(password, newUser);

    //ÄNDRA
    users.push(newUser);

    //SPARA
    localStorage.setItem("users", JSON.stringify(users));
    console.log(`User ${username} created.`);
}