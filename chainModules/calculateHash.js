//Takes new block (as the block class) and previous hash value

export default async function calculateHash(newBlock) {

    let msgInt8 = new TextEncoder().encode(
        JSON.stringify(newBlock.data) + newBlock.index + newBlock.timeStamp + newBlock.prevHash);
    //console.log("msgInt8",msgInt8);

    let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
    //console.log("hashBuffer",hashBuffer);

    let hashArray = Array.from(new Uint8Array(hashBuffer));
   // console.log("hashArray",hashArray);

    let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    //console.log("hashHex",hashHex);

    //Returns new hash value
    return hashHex;
}