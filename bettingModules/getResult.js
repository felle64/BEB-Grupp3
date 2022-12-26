export default async function getResult(wagerInput, betInput) {
    console.log(wagerInput);
    console.log(betInput);
    const apiUrl = `https://larslund.in:5001/api/play?wager=${wagerInput}&bet=${betInput}`
    console.log(apiUrl);
    let data = fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
        return data
}
