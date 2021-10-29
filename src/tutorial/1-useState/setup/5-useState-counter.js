import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  //setValue using prevState ensures correct value and correct order (especially meters with Async JS)
  const handleDecrease = () => {
    setTimeout(() => {
      setValue(prevState => prevState - 1);
    }, 1000);
  };
  const handleReset = () => {
      setTimeout(() => {
          setValue(0);
      }, 1000);
  };
  const handleIncrease = () => {
    setTimeout(() => {
      setValue(prevState => prevState + 1);
    }, 1000);
  };

  return (
      <section>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={handleIncrease}>Increase</button>
        <button type="button" className="btn" onClick={handleReset}>Reset</button>
        <button type="button" className="btn" onClick={handleDecrease}>Decrease</button>
      </section>
  )
};

export default UseStateCounter;
