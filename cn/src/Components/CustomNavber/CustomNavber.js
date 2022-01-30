import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Customnavbar = ({ brandName = "React News App" }) => {
  return (
    <>
      <Navbar  variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} exact to='/'>React News App</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link as={NavLink} exact to="/"> {/* as={NavLink} is use because have use boostrap*/}
                Home
              </Nav.Link>

              {/* The follwoing line also make a link but will not be rendered by React */}
              {/* <Nav.Link as={NavLink}  to="/Health">  
                Health
              </Nav.Link> */}
            {/* <Nav.Link href="health">Health</Nav.Link> */}  

            <NavLink to="/Health" className="nav-link">Health</NavLink> {/* This line will also create a link but will not apply the css */}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Customnavbar;
