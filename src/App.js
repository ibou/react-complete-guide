import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Bouboul', age: 43 },
      { name: 'Sofiane', age: 39 },
      { name: 'Adis Abéba', age: 21 },
    ],
    otherState: 'bal balal'
  });

  console.log("...", personsState)
 const switchNameHandler = () => { 
    setPersonsState( {
      persons: [
        { name: 'newName', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  return (
    <div className="App">
      <h1>Hi, I m a App react ! </h1>
      <button onClick={() => switchNameHandler()}>Switch Name</button>
      {
        personsState.persons.map((person, key) => {
          return <Person name={person.name} age={person.age} key={key}> and I a free man with : {person.age} years old </Person>
        })
      } 
    </div>
  );
};



export default App;


