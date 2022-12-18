export default async function hashPassword(user) {
    let msgInt8 = new TextEncoder().encode(
        JSON.stringify(newBlock.data) + user.uuid);
    let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
    let hashArray = Array.from(new Uint8Array(hashBuffer));
    let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    return hashHex;
}