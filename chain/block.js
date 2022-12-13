//class for block
export default class block {
    //Has info such as
    //index
    //data
    //bet values (Public)
    //bet
    //odds
    //win
    //payout
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
        this.timestamp = Date.now();
        this.prevHash = prevHash;
        this.hash = calculateHash();
    }
}