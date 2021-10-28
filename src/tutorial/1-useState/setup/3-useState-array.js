import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
      const newList = people.filter((el) => el.id !== id);
      setPeople(newList);
  }
  return (
      <>
        { people.map(person => {
          const {id, name} = person;
          return (
              <div className="item" key={id}>
                <h4>{name}</h4>
                <button
                    type="button"
                    className="btn"
                    onClick={() => removeItem(id)}
                >
                    Remove item
                </button>
              </div>
          )
        })}
        <button
            type="button"
            className="btn"
            onClick={() => setPeople([])}
        >
            Remove all items
        </button>
      </>
  );
};

export default UseStateArray;
