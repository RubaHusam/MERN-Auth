import React from 'react';
import { Row } from 'react-bootstrap';

export default function CustomersList({ customers }) {
  return (
    <ul
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {customers.map((customer, id) => {
        return <li key={id}>{customer.name}</li>;
      })}
    </ul>
  );
}
