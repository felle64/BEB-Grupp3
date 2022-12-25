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
}
    