import React from 'react';
import './style.scss';
const Button = ({ onClick, text }) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
