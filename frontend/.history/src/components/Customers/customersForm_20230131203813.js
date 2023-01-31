import axios from 'axios';
import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function CustomersForm({ getCustomers }) {
  const [customerName, setCustomerName] = useState();

  // Validate
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      saveCustomer();
    }

    setValidated(true);
  };

  async function saveCustomer() {
    try {
      const CustomerData = {
        name: customerName,
      };

      await axios.post('http://localhost:5000/customer', CustomerData);
      getCustomers();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Row
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ width: '80%' }}>
        {/* name */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextName'>
          <Form.Label column lg='4' sm='2'>
            Customer Name
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control
              type='name'
              placeholder='Customer Name'
              onChange={(e) => setCustomerName(e.target.value)}
              value={customerName}
              required
            />
          </Col>
        </Form.Group>
        <Button variant='primary' type='submit' style={{ width: '15%' }}>
          Submit
        </Button>
      </Form>
    </Row>
  );
}
