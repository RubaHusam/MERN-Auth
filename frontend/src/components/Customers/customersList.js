import React from 'react';
import { Card, Row } from 'react-bootstrap';

export default function CustomersList({ customers }) {
  return (
    <Row
      style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      {customers.map((customer, id) => {
        return (
          <Card body key={id} style={{ textAlign: 'center' }}>
            {customer.name}
          </Card>
        );
      })}
    </Row>
  );
}
