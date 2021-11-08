import React, { useState } from 'react';
import {data} from '../../../data';

const PropDrilling = () => {
  const [list, setList] = useState(data);

  const handleRemove = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
      <section>
        <h3>Prop Drilling</h3>
        <List people={list} handleRemove = {handleRemove}/>
      </section>
  )
};

//List component does not use handleRemove function, it only passes it to the child
const List = ({people, handleRemove}) => {
  return (
      <>
        {people.map(item => {
          const {id, name} = item;
          return <Person key={id} id={id} name={name} handleRemove={handleRemove}/>
        })}
      </>
  )
}

const Person = ({id, name, handleRemove}) => {
  return (
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => handleRemove(id)}>remove</button>
      </div>
  )
}
export default PropDrilling;
