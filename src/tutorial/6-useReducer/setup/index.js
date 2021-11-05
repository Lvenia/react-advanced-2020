import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [list, setList] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(item){
      setList([...list, {id: new Date().getTime().toString(), name: item}]);
      setItem("");
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000)
  }

  const handleChange = (e) => {
    setItem(e.target.value)
  }
  return (
      <>
        {showModal && <Modal/>}
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={handleChange}/>
          <button type="submit">Add item</button>
        </form>
        {list.map(item => {
          return <h4 key={item.id}>{item.name}</h4>
        })}
      </>
  )
};

export default Index;
