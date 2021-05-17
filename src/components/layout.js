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
  Nav,Container
  
} from "react-bootstrap";

const Layout = ({ pageTitle, children }) => {
  return (
    <Container style={{padding:'0px 100px'}}>
      <title>{pageTitle}</title>
      {/* <Navbar bg='dark'>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </Navbar > */}
      <Navbar
        style={{ maxHeight: "30px" }}
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand href="/">frdc.info</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>

      <h1 className={heading}>{pageTitle}</h1>
      {children}
      </Container>

  );
};

export default Layout;
