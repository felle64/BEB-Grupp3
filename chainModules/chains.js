//Don't know if this is actually needed
import validateChain from "./validateChain.js";
import addBlock from "./addBlock.js";
import block from "./block.js";

export default class chains{
    constructor(){
        //localStorage check
        //add genesis block
        this.blockchain = [];
        let genesisBlock = new block("genesis", 0, "");
        this.blockchain.push(genesisBlock);
        console.log("blockchain", this.blockchain);
    }


    async validateChain(){
        validateChain();
    }
    
    async addBlock(blockData){
        let newBlock = await addBlock(this, blockData);
        this.blockchain.push(newBlock);
        console.log("new block added?");
        console.log("blockchain", this.blockchain);
    }

    async updateLocalStorage(){

    }
}