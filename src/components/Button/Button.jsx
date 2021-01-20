import React from 'react';
import './style.scss';
const Button = ({ onClick, text, styleName }) => {
  return (
    <button
      className={styleName ? `Button--${styleName}` : `Button`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
