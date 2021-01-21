import React, { useState, useEffect, useContext } from 'react';
import { CardsList } from './../../components/CardsList';
import { Summary } from './../../components/Summary';
import { Context } from '../../context/ContextProvider';

import './style.scss';

const Results = () => {
  const { booking, changeBookingData } = useContext(Context);

  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  const urlAPI = `https://600689953698a80017de18f0.mockapi.io/places`;
  // const urlAPI = 'dummyAPI.json';

  useEffect(() => {
    fetch(urlAPI)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then((data) => {
        setPlaces(data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, [urlAPI]);

  const deletePlace = (place) => {
    const newPlaceList = places.filter((data) => data.id !== place.id);
    changeBookingData(place, 0);
    setPlaces(newPlaceList);
  };

  const showTitle = () => {
    if (error)
      return `We have some problems with server (error: ${error}). Please, wait 5 minutes and try again.`;
    else if (!error && isLoading) {
      return `Loading...`;
    } else return `Choose your dream place`;
  };

  return (
    <div className="Results">
      <div className="Results__wrapper">
        <h3 className="Results__title">{showTitle()}</h3>
        <CardsList data={places} deletePlace={deletePlace} />
        <Summary />
      </div>
    </div>
  );
};

export default Results;
