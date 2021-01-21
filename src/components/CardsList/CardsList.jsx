import React from 'react';
import { Card } from './../Card';

import './style.scss';
const CardsList = ({ data, deletePlace }) => {
  const showPlacesList = () => {
    if (data.length > 0) {
      return data.map((data) => (
        <Card key={data.id} data={data} handleDelete={deletePlace} />
      ));
    }
  };

  return <div className="CardsList">{showPlacesList()}</div>;
};

export default CardsList;
