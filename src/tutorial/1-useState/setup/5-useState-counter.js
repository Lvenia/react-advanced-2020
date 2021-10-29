import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  //click handlers
  const handleDecrease = () => {
    setValue(prevState => prevState - 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  const handleIncrease = () => {
    setValue(prevState => prevState + 1);
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
