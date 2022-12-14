import block from "./block.js";
import calculateHash from "./calculateHash.js";

//Takes bet and user information
export default async function addBlock(chain, blockData) {
    console.log("last block test",chain.blockchain[chain.blockchain.length-1]);
    //Put bet and user information into JSON?
    //Also encryp the user data
    //let data = {} //

    //Fetches current chain from localStorage
    //Creates a block class
    let newBlock = new block(blockData, 0, "");
    //Filling the data
    //Checks current index, and sets to one higher
    newBlock.index = chain.blockchain.length;// theNewIndex;
    //Adds data (bet and user information)
        //With user information being encrypted
    //newBlock.data = blockData;
    //timestamp = Date.now();
    //Get previous block's hash value
    newBlock.prevHash = chain.blockchain[chain.blockchain.length-1].hash; //lastBlock.hash;
    //Generate new hash value with calculateHash
    newBlock.hash = await calculateHash(newBlock);

    //Add block to chain
    //chain.blockchain.push(newBlock);
    return(newBlock);

    //Update localStorage value

}