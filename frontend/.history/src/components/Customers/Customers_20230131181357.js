import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomersForm from './customersForm';
import CustomersList from './customersList';

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
