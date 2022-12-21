//Don't know if this is actually needed
import validateChain from "./validateChain.js";
import addBlock from "./addBlock.js";
import block from "./block.js";

export default class Chains {
    constructor() {
        //localStorage check
        //add genesis block
        this.blockchain = [];
        let genesisBlock = new block("genesis", 0, "");
        this.blockchain.push(genesisBlock);
        console.log("blockchain", this.blockchain);
    }


    async validateChain() {
        validateChain();
    }

    async addBlock(chain, blockData) {
        await addBlock(chain, blockData);

        console.log("new block added?");
        console.log("blockchain", this.blockchain);
    }

    async updateLocalStorage() {
        localStorage.setItem("chain", JSON.stringify(this))
    }
}