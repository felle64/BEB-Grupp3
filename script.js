import block from "./chainModules/block.js";
import chains from "./chainModules/chains.js"
import addBlock from "./chainModules/addBlock.js"
import initPage from "./printModules/initPage.js";
import initUsers from "./userModules/initUsers.js";
import initBlockchain from "./chainModules/initBlockchain.js";
// import getResult from "./bettingModules/api.js";
import validateChain from "./chainModules/validateChain.js";
import printBCLoggedOut from "./printModules/pageContent/pageLoggedOut/pageUnknown/modules/printBCLoggedOut.js";

let wagerInput = 1
let betInput = "red"

// console.log("beep");
// let data = await getResult(wagerInput, betInput)
// console.log(data);

await initBlockchain();
await initUsers();
await initPage();
await validateChain();
//printBCLoggedOut();



// console.log("block",block);

// let testBlock = new block("inget", 0, "inget");
// console.log(testBlock);


//console.log(chain.validateChain());




