import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomersForm from './customersForm';
import CustomersList from './customersList';
import axios from 'axios';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get('http://localhost:5000/customer');
    setCustomers(customersRes.data);
  }
  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Row style={{ marginTop: '50px' }}>
      <Col>
        <CustomersList customers={customers} />
      </Col>
      <Col>
        <CustomersForm />
      </Col>
    </Row>
  );
}
