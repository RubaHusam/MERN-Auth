import React from 'react';
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand href='/'>MERN Authentication</Navbar.Brand>
          </Link>
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
              <Link to='/register' style={{ textDecoration: 'none' }}>
                <NavLink href='/register'>Register</NavLink>
              </Link>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <NavLink href='/login'>Login</NavLink>
              </Link>
              <Link to='/customer' style={{ textDecoration: 'none' }}>
                <NavLink href='/customer'>Customer</NavLink>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
