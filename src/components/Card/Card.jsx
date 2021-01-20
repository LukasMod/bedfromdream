import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import './style.scss';
const Card = ({ data }) => {
  const { urlThumb, name, description, cost } = data;
  const [numberOfNights, setNumberOfNights] = useState(0);

  const handleSubtract = () => {
    setNumberOfNights(numberOfNights - 1);
  };

  const handleAdd = () => {
    setNumberOfNights(numberOfNights + 1);
  };

  return (
    <div className="Card" onClick={() => {}}>
      <div className="Card__img-wrapper">
        <img className="Card__img" src={urlThumb} alt={name} />
      </div>
      <div className="Card__info-wrapper">
        <h3 className="Card__title">{name}</h3>
        <p className="Card__description">{description}</p>
      </div>
      <div className="Card__cost-wrapper">
        <span className="Card__cost">{cost} $/night</span>
        {numberOfNights === 0 || (
          <span className="Card__cost--sum">
            total: {(numberOfNights * cost).toFixed(2)} $
          </span>
        )}
      </div>
      <div className="Card__actions-wrapper">
        {numberOfNights === 0 || (
          <FontAwesomeIcon
            icon={faMinusSquare}
            className="Card__icon"
            onClick={handleSubtract}
          />
        )}
        <span className="Card__nights-sum">{numberOfNights}</span>
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="Card__icon"
          onClick={handleAdd}
        />
      </div>
    </div>
  );
};

export default Card;
