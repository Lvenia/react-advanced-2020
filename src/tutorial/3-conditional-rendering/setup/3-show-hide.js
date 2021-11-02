import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
      <>
        <button
            type="button"
            className="btn"
            onClick={() => setShow(!show)}
        >
          Toggle Screen Width
        </button>
        {show && <Item/>}
      </>
  )
};

const Item = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
      <div>
        <h2>Screen Width</h2>
        <h3>{screenWidth}</h3>
      </div>
  )
}

export default ShowHide;
