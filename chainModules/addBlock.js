import block from "./block.js";
import calculateHash from "./calculateHash.js";

//Takes bet and user information
export default async function addBlock(chain, blockData) {
    //console.log("last block test",chain.blockchain[chain.blockchain.length-1]);
    //Put bet and user information into JSON?
    //Also encryp the user data
    //let data = {} //

    //Fetches current chain from localStorage
    //Not done

    //Create new block
    let newBlock = new block(blockData, chain.blockchain.length, "");
    
    //Get hash from previous block
    newBlock.prevHash = chain.blockchain[chain.blockchain.length-1].hash;

    //Generate new hash value with calculateHash
    newBlock.hash = await calculateHash(newBlock);

    //Add block to chain
    //chain.blockchain.push(newBlock);
    chain.blockchain.push(newBlock);
    //return(newBlock);

    //Update localStorage value

}