import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css'; // Make sure this file is imported correctly

const NavbarComponent = () => (
  <Navbar style={{ backgroundColor: 'green',  }} variant="dark" expand="lg">
    <Container fluid className="d-flex justify-content-center">
      <Navbar.Brand className="text-white navbar-brand" href="/">
        المملكة العربية السعودية
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavbarComponent;
