import React from 'react';
import { Row } from 'react-bootstrap';

export default function CustomersList({ customers }) {
  return (
    <Row
      style={{
        width: '100%',
      }}>
      {customers.map((customer, id) => {
        return <Row key={id}>{customer.name}</Row>;
      })}
    </Row>
  );
}
