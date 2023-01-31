import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomersForm from './CustomersForm';
import CustomersList from './CustomersList';

export default function Customers() {
  return (
    <Row>
      <Col>
        <CustomersForm />
      </Col>
      <Col>
        <CustomersList />
      </Col>
    </Row>
  );
}
