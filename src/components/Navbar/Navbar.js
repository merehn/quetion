import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css'; // تأكد من إنشاء هذا الملف واستيراده بشكل صحيح

const NavbarComponent = () => (
  <Navbar style={{ backgroundColor: 'green' }} variant="dark" expand="lg">
    <Container fluid className="d-flex justify-content-center">
      {/* Centered text */}
      <Navbar.Brand className="text-white navbar-brand" href="/">
        المملكة العربية السعودية
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavbarComponent;
