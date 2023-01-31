import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomersForm from './customersForm';
import CustomersList from './customersList';

export default function Customers() {
  return (
    <Row>
      <Col>
        <CustomersList />
      </Col>
      <Col>
        <CustomersForm />
      </Col>
    </Row>
  );
}
