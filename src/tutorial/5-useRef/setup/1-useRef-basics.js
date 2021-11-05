import React, { useEffect, useRef } from 'react';
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }) //useRef does not trigger re-render

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
  }
  return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" ref={refContainer}/>
          <button type="submit">Submit</button>
        </form>
      </>
  )
};

export default UseRefBasics;

