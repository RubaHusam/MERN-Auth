import React from 'react';
import { Col, Row } from 'react-bootstrap';

import customersForm from './customersForm';
import customersList from './customersList';

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
