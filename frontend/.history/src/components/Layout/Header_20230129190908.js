import React from 'react';
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            MERN Authentication
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              style={{
                display: 'flex',
                justifyContent: 'right',
                width: '100%',
                textDecoration: 'none',
              }}>
              <Nav.Link as={Link} to='/' style={{ textDecoration: 'none' }}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/register'
                style={{ textDecoration: 'none' }}>
                Register
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/login'
                style={{ textDecoration: 'none' }}>
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/customer'
                style={{ textDecoration: 'none' }}>
                Customer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}