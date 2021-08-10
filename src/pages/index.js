// Step 1: Import your component
import * as React from "react";
import { Link } from 'gatsby'
import Layout from "../components/cover";
import PictureOfMe from "../../src/images/IMG_3117.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "@fontsource/stix-two-text/400.css"
import StyledBackgroundSection from "../components/styledBackgroundSection";
import { Nav } from "react-bootstrap";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About" style={{ maxWidth: "60vw", padding: "25px" }}>
      <Container style={{ maxHeight:"100vh", border: "15px" }}>

        <Row >
          {/* <Col xs={1}></Col> */}
          <Col xs={12} style={{ fontFamily: "Stix Two Text", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", color:"#602060", textShadow:"7px 5px #ffffe6"}}><h1 style={{fontSize:"200px", postion:"center"}}>FRDC</h1></Col>
          {/* <Col xs={1}></Col> */}

          

        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10} style={{ fontFamily: "Stix Two Text", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", color:"#ffffe6"}}>
            {/* <img
              style={{ maxHeight: "60vh" }}
              src={PictureOfMe}
              alt="A picture of me"
            ></img> */}
            <h3>Site is under maintenance!</h3>
            
            
          <Link to="/portfolio" style={{ padding: "5px", fontFamily: "Stix Two Text", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", color:"#ffffe6"}}>
            {" "}
            projects{" "}
          </Link>
          <Link
            to="https://www.linkedin.com/in/francisrodsonclavel/"
            style={{ padding: "5px",fontFamily: "Stix Two Text", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", color:"#ffffe6" }}
          >
            {" "}
            linkedin{" "}
          </Link>
        
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
