import block from "./block";
import calculateHash from "./calculateHash";

//Takes bet and user information
export default async function addBlock(betValues, userValues) {

    //Put bet and user information into JSON?
    //Also encryp the user data
    let data = {} //

    //Fetches current chain from localStorage
    //Creates a block class
    let newBlock = new block(infoinfo, index = 0, prevHash = "");
    //Filling the data
    //Checks current index, and sets to one higher
    newBlock.index = theNewIndex;
    //Adds data (bet and user information)
        //With user information being encrypted
    newBlock.data = data;
    //timestamp = Date.now();
    newBlock.timestamp = Date.now();
    //Get previous block's hash value
    newBlock.prevHash = lastBlock.hash;
    //Generate new hash value with calculateHash
    newBlock.hash = calculateHash(newBlock, prevHash);

    //Add block to chain
    chain.append(newBlock);

    //Update localStorage value

}