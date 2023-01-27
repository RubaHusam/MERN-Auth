import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Row
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}>
      <Form
        style={{ width: '50%' }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}>
        {/* Email */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column lg='4' sm='2'>
            Email
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control
              type='email'
              placeholder='email@example.com'
              required
            />
          </Col>
        </Form.Group>

        {/* Password */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column lg='4' sm='2'>
            Password
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control type='password' placeholder='Password' required />
          </Col>
        </Form.Group>

        {/* Password */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column lg='4' sm='2'>
            Verify your password
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control
              type='password'
              placeholder='Verify your Password'
              required
            />
          </Col>
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          style={{ justifySelf: 'flex-end' }}>
          Submit
        </Button>
      </Form>
    </Row>
  );
}
