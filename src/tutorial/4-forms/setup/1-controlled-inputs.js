import React, { useState } from 'react';
import {createPortal} from "react-dom";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name && email) {
      setList(prevState => {
        return [...prevState, {id: new Date().getDate().toString(),name, email}];
      })
    } else {
      console.log("Both name and email are required")
    }
    setName("");
    setEmail("");
  };

  return (
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">
              Name:
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">
              Email:
            </label>
            <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {list.map(item => {
          const {id, name, email} = item;
          return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <p>{email}</p>
              </div>
          )
        })}
      </article>
  )
};

export default ControlledInputs;
