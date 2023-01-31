import React from 'react';
import { Row } from 'react-bootstrap';

export default function CustomersList({ customers }) {
  return (
    <>
      {customers.map((customer, id) => {
        <Row key={id}>{customer.name}</Row>;
      })}
    </>
  );
}