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
import StyledBackgroundSection from "./styledBackgroundSection";
// import { Link } from 'react-router-bootstrap'

const Layout = ( { pageTitle, children } ) =>
{
  return (
    <React.Fragment>
<StyledBackgroundSection>
      <Container style = {{maxHeight:"100vh", borderStyle:"solid", borderWidth:"100px", borderColor:"transparent"}}>
        
        {children}
      </Container>
      </StyledBackgroundSection>
    </React.Fragment>

  )
};

export default Layout;
