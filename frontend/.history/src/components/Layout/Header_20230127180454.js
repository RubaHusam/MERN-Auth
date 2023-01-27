import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
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
              <Link to='/'>More deets</Link>
              <Link eventKey={2} href='#memes'>
                Dank memes
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
