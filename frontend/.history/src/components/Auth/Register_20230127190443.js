import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function Register() {
  return (
    <Row
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}>
      <Form style={{ width: '50%' }}>
        {/* Email */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column lg='4' sm='2'>
            Email
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control type='email' placeholder='email@example.com' />
          </Col>
        </Form.Group>

        {/* Password */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column lg='4' sm='2'>
            Password
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control type='password' placeholder='Password' />
          </Col>
        </Form.Group>

        {/* Password */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column lg='4' sm='2'>
            Verify your password
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control type='password' placeholder='Verify your Password' />
          </Col>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Row>
  );
}
