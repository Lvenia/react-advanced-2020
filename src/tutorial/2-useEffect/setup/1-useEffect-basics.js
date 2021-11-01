import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `New messages(${count})`;
  });

  return (
      <>
      <h2>{count}</h2>
        <button
            type="button"
            className="btn"
            onClick={() => setCount(count+1) }
        >
          Increment
        </button>

      </>
  )
};

export default UseEffectBasics;
