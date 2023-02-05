import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomersForm from './customersForm';
import CustomersList from './customersList';
import axios from 'axios';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get(
      'https://mern-auth-azure.vercel.app/customer'
    );
    setCustomers(customersRes.data);
  }
  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Row style={{ marginTop: '50px', width: '100%' }}>
      <Col
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <CustomersList customers={customers} />
      </Col>
      <Col
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <CustomersForm getCustomers={getCustomers} />
      </Col>
    </Row>
  );
}
