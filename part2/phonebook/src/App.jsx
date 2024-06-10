import { useState } from 'react'

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={newFilter} onChange={handleFilterChange} />
    </div>
  );
};

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({personsToShow}) => {
  return (
    <div>
      {personsToShow.map(person => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const personsToShow = newFilter
  ? persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )
  : persons;

  const handleFilterChange = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
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

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
