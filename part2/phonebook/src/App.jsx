import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '999-888-777'
     }
  ]) 

  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if (persons.map(p => p.name).includes(person.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(person))
      setNewNumber('')
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const Display = ({person}) => {
    return (
      <p>{person.name} {person.number}</p>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Display key={person.name} person={person} />)}
    </div>
  )
}

export default App
