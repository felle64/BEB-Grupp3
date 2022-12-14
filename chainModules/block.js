//class for block
import calculateHash from "./calculateHash.js";
export default class block {
    //Has info such as
    //index
    //data
    //bet values (Public)
        //bet (red, black, odd, even)
        //odds
        //win
        //payout
        //result
    //user (Private)
        //username/UUID
        //balance before and after trade?
    //timestamp
    //hash of previous block
    //hash
    //nonce (if we need this, guess it's only useful for mining?)

    constructor(data, index = 0, prevHash = "") {
        //A check for which index to use, either here on or the function that creates the block.
        this.index = index;
        //The betting data in JSON format?
        this.data = data;
        this.timeStamp = Date.now();
        this.prevHash = prevHash;
        this.hash = calculateHash(this, prevHash);
    }
}