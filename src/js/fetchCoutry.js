export default fetchCountry


function fetchCountry(searchQuery) {
    const url = `https://restcountries.com/v2/name/${searchQuery}`
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        // if (response.status === 200) {
        //     return response.json()
        // } else {
        //      throw new Error(`error`)
        // }
    })
}