
export default function formatBetData(data, currentUser) {

    console.log('formatbetdata', data);
    console.log('formatbetdata cu', currentUser);
    let formattedBetData =


    {
        "roll": data.roll
        ,
        "user": {
            "UUID": "0000-0000-0000-0001",
            "username": currentUser,
            "balance": 100,
            "bet": data.bet

        }
    }

    /* 
        {
            "roll": {
                "number": 5,
                "color": "red",
                "parity": "odd"
            },
            "user": {
                "UUID": "0000-0000-0000-0001",
                "username": "mr bet",
                "balance": 100,
                "bet": {
                    "bet": "odd",
                    "wager": "2.00",
                    "win": true,
                    "payout_rate": 1,
                    "payout": "4.00"
                }
            }
        }
     */


    return formattedBetData

}