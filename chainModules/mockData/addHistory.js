export default async function addHistory(chain, data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        await chain.addBlock(chain, data[i]);
    }
}