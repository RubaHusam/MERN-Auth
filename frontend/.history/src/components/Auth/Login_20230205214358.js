import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // Validate
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      login();
    }

    setValidated(true);
  };

  async function login() {
    try {
      const loginData = {
        email,
        password,
      };

      await axios.post(
        'https://mern-auth-azure.vercel.app/auth/login',
        loginData
      );
      await getLoggedIn();
      navigate('/');
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </Col>
        </Form.Group>

        <Row
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'right',
            padding: '0 0 0 0 ',
            margin: '0',
          }}>
          <Button variant='primary' type='submit' style={{ width: '15%' }}>
            Submit
          </Button>
        </Row>
      </Form>
    </Row>
  );
}
