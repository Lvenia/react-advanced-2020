import React, { useState, useContext } from 'react';
import { data } from '../../../data';

//create context
const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // wrap top element
    <PersonContext.Provider value={removePerson}>
      <h3>useContext hook</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

//removePerson omits List element
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

//use created context to reach Provider's value property
const SinglePerson = ({ id, name}) => {
  const removeItem = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
