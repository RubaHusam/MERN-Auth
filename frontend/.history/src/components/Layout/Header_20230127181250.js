import React from 'react';
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Link to='/'>
            <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              style={{
                display: 'flex',
                justifyContent: 'right',
                width: '100%',
              }}>
              <Link to='/'>
                <NavLink href='/'>Home</NavLink>
              </Link>
              <Link to='/login'>
                <NavLink href='/login'>Login</NavLink>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}