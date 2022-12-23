//Print blockchain without usernames
export default function printBCLoggedOut() {

    // hämtar från LS
    let chain = JSON.parse(localStorage.getItem("chain"))

    // kolla bet true/false
    // If data.blockchain.outcome = true: Print WIN
    // else false = LOSE
    //chain['blockchain'][1]['data']['user']['bet']['win']

    // for-loop för att printa ut blockkedjan från LS
    let innerHTML = '';
    console.log(chain);
    //if (chain) {
    for (let i = chain.blockchain.length - 1; i >= 0; i--) {
        console.log(chain, 'chain samarbetar, woho');

        // genesis
        if (chain['blockchain'][i]['data'] == 'genesis') {
            console.log('works!', chain['blockchain'][i]['data'])
        }
        else {
            let myDate = new Date(chain.blockchain[i].timeStamp)
            let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

            //const divs = document.querySelectorAll('div.listBlock');
            innerHTML += `<div class="listBlock">
            <p>Timestamp: ${dateStr}</p>
            <p> A user bet ${chain.blockchain[i].data.user.bet.wager} tokens.</p>
            <p>Win: ${chain.blockchain[i].data.user.bet.win}</p>
            <p>Payout: ${chain.blockchain[i].data.user.bet.payout}</p>
            </div>`
            //  console.log(chain.blockchain[i]);
            //  console.log('nytt block utskrivet');
        }
    }
    //}
    // else {
    //     location.reload();
    // }
    return innerHTML;
}