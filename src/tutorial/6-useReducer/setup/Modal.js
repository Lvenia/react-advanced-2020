import React, { useEffect } from 'react';

const Modal = ({message, close}) => {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 1500);
  })
  return <div className="modal">{message}</div>;
};

export default Modal;
