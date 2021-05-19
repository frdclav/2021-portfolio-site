import * as React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import {
  Navbar,
  Nav,Container, Jumbotron, Row, Col
  
} from "react-bootstrap";
// import { Link } from 'react-router-bootstrap'

const Layout = ({ pageTitle, children }) => {
  return (
    <Container style={{padding:'0px 100px'}}>
      <title>{pageTitle}</title>
      
      <Jumbotron>
        <center>
          
          <h5>francis rodson d. clavel</h5>
          
        <Container>
        <Row>
        <Col xs={4} md={4}>
        </Col>
        <Col xs={4} md={4}>
        <Navbar
        style={{ maxHeight: "30px" }}
        
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto " as="ul">
            <Nav.Item as="li" style={{padding:'5px'}}>
            <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item as="li" style={{padding:'5px'}}>

            <Link to="/about">About</Link>

            </Nav.Item>

            <Nav.Item as="li" style={{padding:'5px'}}>
            <Link to="/portfolio">Projects</Link>

            </Nav.Item>

           
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        </Col>
        <Col xs={4} md={4}>
        </Col>
      </Row>
        </Container>
        

        </center>
      </Jumbotron>
      
      <h1 className={heading}>{pageTitle}</h1>
      {children}
      </Container>

  );
};

export default Layout;
