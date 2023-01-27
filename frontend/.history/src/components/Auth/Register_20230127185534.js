import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function Register() {
  return (
    <>
      <Form>
        {/* Email */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            Email
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='email' placeholder='email@example.com' />
          </Col>
        </Form.Group>

        {/* Password */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column sm='2'>
            Password
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='password' placeholder='Password' />
          </Col>
        </Form.Group>

        {/* Password */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column sm='2'>
            Verify your password
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='password' placeholder='Verify your Password' />
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}
