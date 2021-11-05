import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

const initialState = {
  list: data,
  showModal: false,
  modalMessage: ""
};

const Index = () => {
  const [item, setItem] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  //event handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if(item){
      const itemToAdd = {id: new Date().getTime().toString(), name: item};
      dispatch({type: "ADD_ITEM", payload: itemToAdd});
      setItem("");
    } else {
      dispatch({type: "MISSING_ITEM"})
    }
  }

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const handleClick = (itemId) => {
    dispatch({type: "REMOVE_ITEM", payload: itemId })
  }

  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL"})
  };

  return (
      <>
        {state.showModal && <Modal message={state.modalMessage} close={closeModal}/>}
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={handleChange}/>
          <button type="submit">Add item</button>
        </form>
        {state.list.map(item => {
          return (
              <div key={item.id} className="item">
                <h4>{item.name}</h4>
                <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                >
                  Remove
                </button>
              </div>
          )
        })}
      </>
  )
};

export default Index;
