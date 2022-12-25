export default class userClass {
    constructor(username) {
        this.username = username;
        this.balance = 100 //100 gratis tokens när kontot skapas
    }
    updateBalance(v) {
        this.balance += Number(v)

    }
}