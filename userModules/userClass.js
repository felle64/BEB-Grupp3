//import hashPassword from "./hashPassword.js"

export default class userClass {
    constructor(username) {
        this.username = username;
        //this.uuid = self.crypto.randomUUID();
        //this.password = password//hashPassword(password, this)
        //.then( err => console.log(err));
        this.balance = 100 //100 gratis tokens när kontot skapas
    }
    updateBalance(v) {
        this.balance += v
        
    }
}

// console.log(hashPassword("test","janne")
// .then(hash => console.log("hash test",hash)));
