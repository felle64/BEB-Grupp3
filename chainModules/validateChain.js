//Takes blockchain variable, or name of localStorage variable for the blockchain
import block from "./block.js";
import calculateHash from "./calculateHash.js";

export default async function validateChain(){
    let validationResultDiv= document.getElementById("validationResultDiv");
    validationResultDiv.innerHTML = `validating...`
   //let validating =  setTimeout(() => {validationResultDiv.innerHTML = `validating...`}, 1000); 
   
    
 //Fetches current chain from localStorage
 
 let chain = JSON.parse(localStorage.getItem('chain'));
    
    for (let i = 0;  i < chain.blockchain.length; i++) {
        
        if(await calculateHash(chain.blockchain[i]) !== chain.blockchain[i].hash) {
            setTimeout(() => {validationResultDiv.innerHTML = `invalid ❌`},1000);
            break
            // return
        } else {
           // validationResultDiv.innerHTML = `valid ✔️`;
            // return
            setTimeout(() => {validationResultDiv.innerHTML = `valid ✔️`},1000);
        }
       
    }
    

}
    