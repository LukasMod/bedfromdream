import React from 'react';
import { Button } from './../Button';

import './style.scss';
const Summary = ({ data }) => {
  const handleClick = () => {};

  return (
    <div className="Summary" onClick={() => {}}>
      <div className="Summary__items">
        <p>Beach hut -- 2 nights -- 466.00 $</p>
      </div>
      <div className="Summary__actions">
        <span className="Summary__cost"> 12345.00 $</span>
        <Button onClick={handleClick} text="BUY" styleName="light" />
      </div>
    </div>
  );
};

export default Summary;
