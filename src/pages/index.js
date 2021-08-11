// Step 1: Import your component
import * as React from "react";
import { Link } from 'gatsby'
import Layout from "../components/cover";
import PictureOfMe from "../../src/images/IMG_3117.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "@fontsource/stix-two-text/400.css"
import StyledBackgroundSection from "../components/styledBackgroundSection";
import { Nav } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
// Step 2: Define your component
const AboutPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



  return (
    <Layout pageTitle="About" >
      {/* <Container style={{ maxHeight: "100vh", border: "15px" }}> */}

      <Row >
        {/* <Col xs={1}></Col> */}

        {isTabletOrMobile && <Col xs={12} style={{ fontFamily: "Stix Two Text", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#602060", textShadow: "3px 3px #ffffe6" }}><h1 style={{ fontSize: "100px", postion: "center" }}>FRDC</h1></Col>}
        {!isTabletOrMobile && <Col xs={12} style={{ fontFamily: "Stix Two Text", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#602060", textShadow: "7px 5px #ffffe6" }}><h1 style={{ fontSize: "200px", postion: "center" }}>FRDC</h1></Col>}

        {/* <Col xs={1}></Col> */}



      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10} style={{ fontFamily: "Stix Two Text", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#ffffe6" }}>
          {/* <img
              style={{ maxHeight: "60vh" }}
              src={PictureOfMe}
              alt="A picture of me"
            ></img> */}
          <h3></h3>

          {/* <h1>Device Test!</h1>
          {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
          {isBigScreen && <p>You  have a huge screen</p>}
          {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
          <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
          {isRetina && <p>You are retina</p>} */}


          <Link to="/portfolio" style={{ padding: "5px", fontFamily: "Stix Two Text", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#ffffe6", textShadow: "3px 3px #602060" }}>
            {" "}
            projects{" "}
          </Link>
          <Link
            to="https://www.linkedin.com/in/francisrodsonclavel/"
            style={{ padding: "5px", fontFamily: "Stix Two Text", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#ffffe6", textShadow: "3px 3px #602060" }}
          >
            {" "}
            linkedin{" "}
          </Link>

        </Col>
        <Col xs={1}></Col>
      </Row>
      {/* </Container> */}
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
