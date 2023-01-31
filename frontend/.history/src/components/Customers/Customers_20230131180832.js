import React from 'react';
import customersForm from './customersForm';
import customersList from './customersList';
import { Col, Row } from 'react-bootstrap';

export default function customers() {
  return (
    <Row>
      <Col>
        <customersForm />
      </Col>
      <Col>
        <customersList />
      </Col>
    </Row>
  );
}
