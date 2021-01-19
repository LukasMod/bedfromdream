import React from 'react';
import './style.scss';
import { Button } from './../../components/Button';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cart');
  };

  return (
    <div className="Home">
      <div className="Home__wrapper">
        <h1 className="Home__title">Book Your Dream</h1>
        <p className="Home__paragraph">
          Find your dream place with us and book a bed for few nights.
        </p>
        <Button onClick={handleClick} text="Check our places" />
      </div>
    </div>
  );
};

export default Home;
