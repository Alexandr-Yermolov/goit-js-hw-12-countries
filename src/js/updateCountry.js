export const updateCountry = (array) => {
    return {
                name: array[0].name, population: array[0].population,
                capital: array[0].capital,
                languages: array[0].languages.map(item => item.name),
                flags: array[0].flags[0]
            }
}