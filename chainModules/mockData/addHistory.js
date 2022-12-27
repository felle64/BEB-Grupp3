import addBlock from "../addBlock.js";

export default async function addHistory(data) {
    for (let i = 0; i < data.length; i++) {
        await addBlock(data[i]);
    }
}