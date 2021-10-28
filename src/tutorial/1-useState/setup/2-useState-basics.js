import React, { useState } from 'react';

const UseStateBasics = () => {
  const [value, setValue] = useState(true);
  return (
      <>
        <h2>{value ? "YES" : "NO"}</h2>
        <button
            type="button"
            className="btn"
            onClick={() => {setValue(prevState => !prevState)}}
        >
         Toggle Yes/No
        </button>
      </>
  )
};

export default UseStateBasics;
