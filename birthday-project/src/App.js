import { useState } from 'react'
import { data } from './data'
import "./App.css";

function App() {
  const [people, setPeople] = useState(data)
  const [searchText, setSearchText] = useState('')

  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }

  return (
    <>
    <input type="search" name="search" id="search peoples" placeholder='search here...' className='searchBar' onChange={event => {setSearchText(event.target.value)}} />
      <h3 className='birthdayTitle'>
        {people.length} birthdays today
      </h3>
      {people.filter((value) => {
        if (searchText === '')
        {
          return value
        }
        else if (value.name.toLowerCase().includes(searchText.toLowerCase()))
        {
          return value
        }
      }).map((person) => {
        const { id, name, age, image } = person

        return (
          <div className='container' key={id}>
            <div className='avatar'>
              <img src={image} alt={name} />
            </div>
            <div className="names">
              <h3>{name}</h3>
              <p>{age} years</p>

            </div>
            <div className='button'>
              <button className='btn' onClick={() => removePerson(id)}>
                Dismiss
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default App