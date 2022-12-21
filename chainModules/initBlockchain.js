import addHistory from "./mockData/addHistory.js";
import Chains from "./chains.js";
import calculateHash from "./calculateHash.js";


export default async function initBlockchain() {

    if (!localStorage.getItem("chain")) {
        console.log("No blockchain found");
        //create blockchain
        let chain = new Chains();
        chain.blockchain[0].hash = await calculateHash(chain.blockchain[0]);
        localStorage.setItem("chain", JSON.stringify(chain));

        //add history blocks
        let data = await fetch("./chainModules/mockData/chainHistory.json")
            .then(result => result.json())
            .then(data => {
                console.log(data.length);
                return data;
            })
        //console.log(data);
        console.log('before mock', chain);
        await addHistory(data);

        //fetch the new chain from LS (got saved after each addBlock )
        chain = JSON.parse(localStorage.getItem("chain"));
        console.log('chain after history is added', chain);

        //Not needed, as addBlock saves it each time
        //add to localStorage
        //localStorage.setItem("chain", JSON.stringify(chain));
    }
    else {
        //load blockchain
        let chain = JSON.parse(localStorage.getItem("chain"));
        console.log(chain);
    }

}

