import React from 'react';
import { Row } from 'react-bootstrap';

export default function CustomersList({ customers }) {
  return (
    <>
      hi
      {customers.map((customer, id) => {
        return <Row key={id}>{customer.name}</Row>;
      })}
    </>
  );
}
