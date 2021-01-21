import React from 'react';
import './style.scss';

const Table = ({ booking }) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th className="Table__header">Place</th>
          <th className="Table__header">Nights</th>
          <th className="Table__header">Cost</th>
        </tr>
      </thead>
      <tbody>
        {booking.map((item) => (
          <tr key={item.id}>
            <td className="Table__data">{item.name}</td>
            <td className="Table__data">{item.numberOfNights}</td>
            <td className="Table__data">
              {(item.cost * item.numberOfNights).toFixed(2)} $
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
