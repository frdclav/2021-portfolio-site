import * as React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import
{
  a
} from "./navi.module.css";
import
{
  Navbar,
  Nav, Container, Jumbotron, Row, Col

} from "react-bootstrap";
import "../styles/style.css"
// import { Link } from 'react-router-bootstrap'


const Navi = ( { pageTitle, children } ) =>
{
  return (
    <Navbar bg="light" expand="lg">
      <div><Navbar.Brand className="brand"><Link to="/about">francis rodson d. clavel</Link></Navbar.Brand></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/portfolio" style={{ padding: '5px' }}> projects </Link>
          <Link to="https://www.linkedin.com/in/francisrodsonclavel/" style={{ padding: '5px' }}> linkedin </Link>
        </Nav>
      </Navbar.Collapse>


    </Navbar>

  )
};

export default Navi;
