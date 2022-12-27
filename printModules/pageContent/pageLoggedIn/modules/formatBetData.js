
export default function formatBetData(data, currentUser) {

    let formattedBetData =


    {
        "roll": data.roll
        ,
        "user": {
            "UUID": currentUser.uuid,
            "username": currentUser.username,
            "balance": currentUser.balance,
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