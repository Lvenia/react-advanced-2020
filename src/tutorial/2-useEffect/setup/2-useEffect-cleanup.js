import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  //using cleanup considered as a good practice,
  // even though in this particular case it would be enough
  // to provide second argument in order to set listener just once
  // with the first render
  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize',handleResize)
      }
  })

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  // }, [])

  return (
      <>
        <h2>Screen width</h2>
        <h3>{width}</h3>
      </>
  )
};

export default UseEffectCleanup;
