import React, { useState } from 'react';

const ControlledInputs = () => {
  const [person, setPerson] = useState({firstName: '',email: '', age: '' });
  const [list, setList] = useState([]);

  const {firstName, email, age} = person;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPerson(prevState => {
      return {...prevState, [name]: value};
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email && age) {
      setList([...list, {...person, id: new Date().getTime().toString()}])
      setPerson({firstName: '',email: '', age: ''})
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
                type='number'
                id='age'
                name='age'
                value={age}
                onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {list.map((item, index) => {
          const { id, firstName, email, age } = item;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
