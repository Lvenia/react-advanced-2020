import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    // isError && <h2>There is an error</h2> //Logical AND short circuit evaluation, isError true => h2 is shown
    // isError || <h2>There is an error</h2> //Logical OR short circuit evaluation, isError false => h2 is shown
    <h2>{isError ? "There is an Error" : "Content"}</h2>
  )
};

export default ShortCircuit;
