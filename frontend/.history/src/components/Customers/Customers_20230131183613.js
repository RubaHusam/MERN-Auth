import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomersForm from './customersForm';
import CustomersList from './customersList';

export default function Customers() {
  return (
    <Row style={{ marginTop: '50px' }}>
      <Col>
        <CustomersList />
      </Col>
      <Col>
        <CustomersForm />
      </Col>
    </Row>
  );
}
