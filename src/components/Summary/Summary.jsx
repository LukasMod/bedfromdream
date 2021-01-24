import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from './../Button';
import { Table } from './../Table';
import { Context } from '../../context/ContextProvider';

import './style.scss';

const Summary = () => {
  const { booking, summaryCost } = useContext(Context);
  const history = useHistory();
  const handleClick = () => {
    history.push('/payment');
  };

  return (
    <div className="Summary" onClick={() => {}}>
      <div className="Summary__items">
        {booking.length > 0 && <Table booking={booking} />}
      </div>
      <div className="Summary__actions">
        <span className="Summary__cost"> {summaryCost.toFixed(2)} $</span>
        <Button onClick={handleClick} text="BUY" styleName="light" />
      </div>
    </div>
  );
};

export default Summary;
