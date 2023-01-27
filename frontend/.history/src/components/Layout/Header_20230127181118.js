import React from 'react';
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              style={{
                display: 'flex',
                justifyContent: 'right',
                width: '100%',
              }}>
              <Link>
                <NavLink href='/'>Home</NavLink>
              </Link>
              <Link>
                <NavLink href='/login'>Login</NavLink>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
