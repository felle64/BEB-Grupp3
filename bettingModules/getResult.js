export default async function getResult(wagerInput, betInput) {
  const apiUrl = `https://larslund.in:5001/api/play?wager=${wagerInput}&bet=${betInput}`
    let data = fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
        return data
}
