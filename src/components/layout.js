import * as React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import
{
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import
{
  Navbar,
  Nav, Container, Jumbotron, Row, Col

} from "react-bootstrap";
import "../styles/style.css"
import Navi from "./navi";
// import { Link } from 'react-router-bootstrap'

const Layout = ( { pageTitle, children } ) =>
{
  return (
    <React.Fragment>

      <Container>
        <Navi></Navi>
        {children}
      </Container>

    </React.Fragment>

  )
};

export default Layout;
