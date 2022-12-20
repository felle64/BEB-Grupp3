export default function printBCLoggedIn() {

// hämta från LS
// JSON-parse:a det
let chain = JSON.parse(localStorage.getItem("chain"))

// kolla bet true/false
    // If data.blockchain.outcome = true: Print WIN
    // else false = LOSE
    chain['blockchain'][1]['data']['user']['bet']['win']

    // for-loop för att printa ut blockkedjan från LS
    let innerHTML = '';

    for (let i = 0; i < chain['blockchain'].length; i++) {
        console.log(chain, 'chain samarbetar, woho');

        // genesis
        if(chain['blockchain'][i]['data'] == 'genesis') {
            console.log('genesis funkar')
        }
        else {
        innerHTML += `<div class="listBlock">
        <p>2022-12-19 01:18</p>
        <p>User FUNKAR bet 20 tokens on red</p>
        <p>Outcome: WIN</p>
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
