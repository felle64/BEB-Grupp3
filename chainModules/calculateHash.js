//Takes new block (as the block class) and previous hash value

export default async function calculateHash(newBlock, prevHash) {

    let msgInt8 = new TextEncoder().encode(
        JSON.stringify(newBlock.data) + newBlock.index + newBlock.timeStamp + prevHash);
    let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
    let hashArray = Array.from(new Uint8Array(hashBuffer));
    let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    //Returns new hash value
    return hashHex;
}