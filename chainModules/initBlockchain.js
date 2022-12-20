import addHistory from "./mockData/addHistory.js";
import Chains from "./chains.js";
export default async function initBlockchain() {

    if (!localStorage.getItem("chain")) {
        console.log("No blockchain found");
        //create blockchain
        let chain = new Chains();
        //add fake blocks
        let data = await fetch("./chainModules/mockData/chainHistory.json")
            .then(result => result.json())
            .then(data => {
                console.log(data.length);
                return data;
                // console.log('laskdjfalsdf', chain);

                // console.log('laskdjfalsdf', chain);
            })
        console.log(data);
        console.log('before mock', chain);
        await addHistory(chain, data);
        console.log('after mock', chain);
        localStorage.setItem("chain", JSON.stringify(chain));
        //add to localStorage
    }
    else {
        //load blockchain
        let chain = JSON.parse(localStorage.getItem("chain"));
        console.log(chain);

    }

}

