import hashPassword from "./hashPassword.js"

export default class userClass{
    constructor(username, password){
        this.username = username;
        this.password = hashPassword(password);
        this.uuid = self.crypto.randomUUID();
    }
}