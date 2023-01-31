import React from 'react';
import { Card, Row } from 'react-bootstrap';

export default function CustomersList({ customers }) {
  return (
    <Row
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {customers.map((customer, id) => {
        return (
          <Card body key={id}>
            {customer.name}
          </Card>
        );
      })}
    </Row>
  );
}
