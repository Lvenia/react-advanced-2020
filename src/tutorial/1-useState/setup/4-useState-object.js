import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    favouriteDish: 'pizza'
  });

  const handleClick = () => {
    setPerson({...person, favouriteDish: 'pasta'})
  }
  return (
      <>
        <h2>{`This is ${person.name}`}</h2>
        <p className="item">{`Age ${person.age}`}</p>
        <p className="item">{`Favourite meal: ${person.favouriteDish}`}</p>
        <button
            type="button"
            className="btn"
            onClick={handleClick}
        >
          Change meal to pasta
        </button>
      </>
  )
};

export default UseStateObject;
