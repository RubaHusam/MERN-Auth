import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function CustomersForm() {
  const [customerName, setCustomerName] = useState();

  // Validate
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // register();
    }

    setValidated(true);
  };

  async function saveCustomer() {
    try {
      const CustomerData = {
        customerName,
      };

      await axios.post('http://localhost:5000/customer', CustomerData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* name */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextname'>
          <Form.Label column lg='4' sm='2'>
            Customer Name
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control
              type='name'
              placeholder='name@example.com'
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
    </>
  );
}
