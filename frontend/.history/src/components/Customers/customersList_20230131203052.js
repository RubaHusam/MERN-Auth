import React from 'react';
import { Card } from 'react-bootstrap';

export default function CustomersList({ customers }) {
  return (
    <Card
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {customers.map((customer, id) => {
        return <Card.Body key={id}>{customer.name}</Card.Body>;
      })}
    </Card>
  );
}
