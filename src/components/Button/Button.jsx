import React from 'react';
import './style.scss';
const Button = ({ onClick, text, styleName, type }) => {
  return (
    <button
      className={styleName ? `Button--${styleName}` : `Button`}
      onClick={onClick}
      type={type}>
      {text}
    </button>
  );
};

export default Button;
