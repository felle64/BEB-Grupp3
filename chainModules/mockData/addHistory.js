export default async function addHistory(data, chain) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        await chain.addBlock(data[i]);
    }
}