import { useState, useMemo } from 'react'
import { generateOptionsElements } from './utils/generateOptions';
import { FormState, CountryValues } from './types/types';
import {
  initialFormValues,
  defaultCountryValues,
  educationOptions,
  contriesList,
  initialOption
} from './constants';
import "./styles/app.css"

function App() {
  const [formValues, setFormValues] = useState<FormState>(initialFormValues)
  const [countryValues, setCountryValues] = useState<CountryValues>(defaultCountryValues)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === initialOption) {
      setFormValues({
        ...formValues,
        country: null,
        city: null,
        accommodation: null
      })
      setCountryValues(defaultCountryValues)
    } else {
      setFormValues({
        ...formValues,
        country: event.target.value,
        city: null,
        accommodation: null
      })
      const foundCountry = contriesList.filter((item) => item.name === event.target.value)
      setCountryValues({ cities: foundCountry[0].city, accommodation: foundCountry[0].accommodation })
    }
  }

  const changeFormValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues(event.target.value === initialOption ?
      { ...formValues, [event.target.name]: null } :
      { ...formValues, [event.target.name]: event.target.value }
    )
  }

  const isDisabled = useMemo(() => {
    return Object.values(formValues).some((item) => item === null);
  }, [formValues]);

  return (
    <div>
      <form
        className='form'>
        <select
          name="country"
          onChange={handleChange}>
          {generateOptionsElements(contriesList)}
        </select>
        <div>
          <select
            name="city"
            disabled={!formValues.country}
            onChange={changeFormValues}>
            {generateOptionsElements(countryValues.cities)}
          </select>
        </div>
        <select
          name="education"
          onChange={changeFormValues}>
          {generateOptionsElements(educationOptions)}
        </select>
        {<select
          name="accommodation"
          disabled={!formValues.country}
          onChange={changeFormValues}>
          {generateOptionsElements(countryValues.accommodation)}
        </select>}
        <button
          className='form__button'
          disabled={isDisabled}
        >Отправить</button>
      </form>
    </div>
  )
}

export default App
