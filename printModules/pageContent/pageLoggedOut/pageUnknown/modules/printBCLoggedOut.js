export default function printBCLoggedOut() {

    let chain = JSON.parse(localStorage.getItem("chain"))
    let innerHTML = '';
  //  console.log(chain);
    for (let i = chain.blockchain.length - 1; i >= 0; i--) {
        console.log(chain, 'chain samarbetar, woho');

        // genesis
        if (chain['blockchain'][i]['data'] == 'genesis') {
            console.log('works!', chain['blockchain'][i]['data'])
        }
        else {
            let myDate = new Date(chain.blockchain[i].timeStamp)
            let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

            innerHTML += `<div class="listBlock">
            <p>Timestamp: ${dateStr}</p>
            <p> A user bet ${chain.blockchain[i].data.user.bet.wager} tokens.</p>
            <p>Win: ${chain.blockchain[i].data.user.bet.win}</p>
            <p>Payout: ${chain.blockchain[i].data.user.bet.payout}</p>
            </div>`
            //  console.log(chain.blockchain[i]);
        }
    }
    return innerHTML;
}