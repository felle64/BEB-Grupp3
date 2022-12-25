//Takes blockchain variable, or name of localStorage variable for the blockchain
import block from "./block.js";
import calculateHash from "./calculateHash.js";

export default async function validateChain(){
    //console.log("validerar");
    let validationResultDiv= document.getElementById("validationResultDiv");
       
 //Fetches current chain from localStorage
 let chain = JSON.parse(localStorage.getItem('chain'));
    for (let i = 0;  i < chain.blockchain.length; i++) {
        //console.log(chain.blockchain[i]);
        if(await calculateHash(chain.blockchain[i]) === chain.blockchain[i].hash) {
            //console.log('valid', chain.blockchain[i].hash);
            validationResultDiv.innerHTML = `valid ✔️`;
            // return
        } else {
            console.log('invalid', chain.blockchain[i].hash);
            validationResultDiv.innerHTML = `invalid ❌`;
            //console.log(calculateHash(chain.blockchain[i])); // ger promise
            // return
        }
    }
    // REFERENS ----------------------------------------------------------------------
/*     let innerHTML = '';
    console.log(chain);
    for (let i = chain.blockchain.length - 1; i >= 0; i--) {
        console.log(chain, 'chain samarbetar, woho');

        // genesis
        if (chain['blockchain'][i]['data'] == 'genesis') {
            console.log('works!', chain['blockchain'][i]['data'])
        }
        else {
            let myDate = new Date(chain.blockchain[i].timeStamp)
            let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() +
             " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

            const divs = document.querySelectorAll('div.listBlock');
            innerHTML += `<div class="listBlock">
            <p>Timestamp: ${dateStr}</p>
            <p>${chain.blockchain[i].data.user.username} bet ${chain.blockchain[i].data.user.bet.wager} 
            tokens on ${chain.blockchain[i].data.user.bet.bet}</p> */

// --------------------------------------------------------------------------

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