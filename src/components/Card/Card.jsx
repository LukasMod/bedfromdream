import React from 'react';
import './style.scss';
const Card = ({ data }) => {
  return (
    <div className="Card" onClick={() => {}}>
      <div className="Card__img-wrapper">
        <img className="Card__img" src={data.urlThumb} alt={data.name} />
      </div>
      <div className="Card__info-wrapper">
        <h3 className="Card__title">{data.name}</h3>
        <p className="Card__description">{data.description}</p>
      </div>
      <div className="Card__actions-wrapper">
        <button className="Card__subtract">-1</button>
        <span>0</span>
        <button className="Card__add">+1</button>
      </div>
    </div>
  );
};

export default Card;
