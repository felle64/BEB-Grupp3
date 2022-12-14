//Takes blockchain variable, or name of localStorage variable for the blockchain

export default async function validateChain(){
    console.log("validerar");
    //Fetches current chain from localStorage
    //For block in chain
        //check if calculateHash(block) == block.hash
            //if not
                //return invalid
                //break
    //If all checked, and no issue
        //return valid
}

//Recalculates the hash of each block using calculateHash.js

//returns Valid/Invalid (maybe including which block(s) failed validation)