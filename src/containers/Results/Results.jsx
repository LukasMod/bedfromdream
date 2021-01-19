import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { Card } from './../../components/Card';
// import { Image } from '../../components/Image';

import './style.scss';

const Results = () => {
  // const { clientId, search, handleValidate, acceptSearch } = useContext(
  //   StoreContext
  // );

  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');
  // const [imageClicked, setImageClicked] = useState({});
  // const [resultsName, setResultsName] = useState('');

  const urlAPI = `https://600689953698a80017de18f0.mockapi.io/places`;

  useEffect(() => {
    fetch(urlAPI)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then((data) => {
        setPlaces(data);
        setError(false);
      })
      .catch((error) => setError(error.message));
  }, [urlAPI]);

  // const handleImageClick = (imageData) => {
  //   setImageClicked(imageData);
  // };

  const showPlacesList = () => {
    if (places.length > 0) {
      return places.map((data) => <Card key={data.id} data={data} />);
    }
  };

  console.log(places);
  // const showTitle = () => {
  //   if (error)
  //     return `We have some problems with server (error: ${error}). Please, wait 5 minutes and try again.`;
  //   else if (!error && images.length > 0)
  //     return `Your results for: ${resultsName}`;
  //   else
  //     return `Sorry, we couldn't find it. Please try again with a different phrase.`;
  // };

  return (
    <div className="Results">
      <div className="Results__wrapper">
        {/* <h3 className="Results__title">{showTitle()}</h3> */}
        <div className="Results__list"> {showPlacesList()}</div>
      </div>
    </div>
  );
};

export default Results;
