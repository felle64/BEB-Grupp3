import addBlock from "../addBlock.js";

export default async function addHistory(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        await addBlock(data[i]);
    }
}