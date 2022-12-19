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
        //-------------------JANNES KOD--------------------------------------------------------------------------------
        //     let testHash = currentBlock.calculateHash().then(hash => {
        //         console.log("testHash", hash);
        //         if (currentBlock.hash !== hash) {
        //             console.log("INVALID! Not same hash!", currentBlock.hash, hash);
        //             // return false;
        //         }
        //     });

        //     if (currentBlock.prevHash !== prevBlock.hash) {
        //         console.log("Invalid: Not same prev hash");
        //        // return false;
        //     }

        //     console.log("VALID");
        //    // return true;
        // }
        //-------------------JANNES KOD--------------------------------------------------------------------------------
    

}
//Recalculates the hash of each block using calculateHash.js

//returns Valid/Invalid (maybe including which block(s) failed validation)