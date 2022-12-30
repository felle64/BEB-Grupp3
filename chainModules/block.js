
export default class block {
    constructor(data, index = 0, prevHash = "") {
        this.index = index;
        this.data = data;
        this.timeStamp = Date.now();
        this.prevHash = prevHash;
        //funkar inte att gör det här
        //this.hash = calculateHash(this, prevHash);
        //nonce (if we need this, guess it's only useful for mining?)
    }
}