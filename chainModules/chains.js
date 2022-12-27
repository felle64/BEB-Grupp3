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
    }


    async validateChain() {
        validateChain();
    }

    async addBlock(chain, blockData) {
        await addBlock(chain, blockData);
    }

    async updateLocalStorage() {
        localStorage.setItem("chain", JSON.stringify(this))
    }
}