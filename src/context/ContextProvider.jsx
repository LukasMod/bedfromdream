import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [booking, setBooking] = useState([]);
  const [summaryCost, setSummaryCost] = useState(0);

  const changeBookingData = (book, numberOfNights) => {
    const cleanedBooking = booking.filter((item) => item.id !== book.id);
    if (numberOfNights === 0) {
      setBooking([...cleanedBooking]);
    } else {
      setBooking([
        ...cleanedBooking,
        {
          id: book.id,
          name: book.name,
          cost: book.cost,
          numberOfNights: numberOfNights,
        },
      ]);
    }
  };

  const newSummaryCost = booking
    .map((item) => item.cost * item.numberOfNights)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    setSummaryCost(newSummaryCost);
  }, [newSummaryCost]);

  return (
    <Context.Provider value={{ booking, changeBookingData, summaryCost }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
