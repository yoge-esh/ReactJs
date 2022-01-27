import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Customnavbar = ({ brandName = "React News App" }) => {
  return (
    <>
      <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">React News App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="health">Health</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Customnavbar;
