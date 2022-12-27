export default function printBCLoggedIn() {

    // hämtar från LS
    let chain = JSON.parse(localStorage.getItem("chain"))

    // kolla bet true/false
    // If data.blockchain.outcome = true: Print WIN
    // else false = LOSE
    //chain['blockchain'][1]['data']['user']['bet']['win']

    // for-loop för att printa ut blockkedjan från LS
    let innerHTML = '';
    for (let i = chain.blockchain.length - 1; i >= 0; i--) {
        // genesis
        if (chain['blockchain'][i]['data'] == 'genesis') {
        }
        else {
            let myDate = new Date(chain.blockchain[i].timeStamp)
            let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

            //const divs = document.querySelectorAll('div.listBlock');
            innerHTML += `<div class="listBlock">
            <p>Timestamp: ${dateStr}</p>
            <p>${chain.blockchain[i].data.user.username} bet ${chain.blockchain[i].data.user.bet.wager} tokens on ${chain.blockchain[i].data.user.bet.bet}</p>
            <p>Win: ${chain.blockchain[i].data.user.bet.win}</p>
            <p>Payout: ${chain.blockchain[i].data.user.bet.payout}</p>
            </div>`
        }
    }
    return innerHTML;
    /* 
        { if (data.bet.win === true) {
            resultBetDiv.innerHTML = `<p>YOU WIN ${data.bet.payout - data.bet.wager} Lagom Token</p>`   
           }else{
               resultBetDiv.innerHTML = `<p>YOU LOSE</p>`
           }
        } */


    // 

    /* <div class="listBlock">
        <p>2022-12-19 01:18</p>
        <p>User BEEP bet 2 tokens on red</p>
        <p>Outcome: WIN</p>
        </div>
        <div class="listBlock">
        <p>2022-12-19 01:17</p>
        <p>User BOOP bet 2 tokens on red</p>
        <p>Outcome: WIN</p>
        </div> */
}
