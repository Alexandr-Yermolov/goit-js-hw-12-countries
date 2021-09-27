import fetchCoutry from './fetchCoutry.js'
import debounce from 'lodash.debounce'
import itemTemplate from '../templates/item.hbs'
import countryDecsription from '../templates/contry.hbs'
import { getRefs } from './getRefs.js'
import { information, successInfo, errorInfo } from './notification.js'
import { updateCountry } from './updateCountry.js'
const refs = getRefs()
  
  const debounceCallback = debounce((e) => {
      let inputValue = e.target.value.trim()
      if (inputValue === '') return
      fetchCoutry(inputValue).then(matchesLenght)
    }, 500)
    
    refs.input.addEventListener('input', debounceCallback )
    
    function matchesLenght(array) {
        if (array.length > 10) {
            errorInfo()
        }
        if (array.length >= 2 && array.length <= 10) {
            refs.list.innerHTML = itemTemplate(array)
            information()
        }
        if (array.length === 1) {
            const country = updateCountry(array)
            refs.list.innerHTML = countryDecsription(country)
            successInfo()
        }
}