import React from 'react';
import { Card } from './../Card';

import './style.scss';
const CardsList = ({ data }) => {
  const showPlacesList = () => {
    if (data.length > 0) {
      return data.map((data) => <Card key={data.id} data={data} />);
    }
  };

  return <div className="CardsList">{showPlacesList()}</div>;
};

export default CardsList;
