import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';


export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVerify, setPasswordVerify] = useState();

  const { getLoggedIn } = useContext(AuthContext);


  // Validate
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      register();
    }

    setValidated(true);
  };

  async function register() {
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post('http://localhost:5000/auth', registerData);
      getLoggedIn();
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

        {/* Password */}
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column lg='4' sm='2'>
            Verify your password
          </Form.Label>
          <Col lg='8' sm='10'>
            <Form.Control
              type='password'
              placeholder='Verify your Password'
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
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
