// Step 1: Import your component
import * as React from "react";
// import { Link } from 'gatsby'
import Layout from "../components/layout";
import PictureOfMe from "../../src/images/IMG_3117.jpg";
import { Container, Row, Col } from "react-bootstrap";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About" style={{ maxWidth: "60vw", padding: "25px" }}>
      <Container style={{ padding: "15px" }}>
        <Row>
          <Col xs={4}>
            <img
              style={{ maxWidth: "100%" }}
              src={PictureOfMe}
              alt="A picture of me"
            ></img>
          </Col>
          <Col xs={8}>
            <h5>
              I am a full stack web developer and experienced technical support
              engineer for Adobe.
            </h5>

            <p>
              I am constantly looking to learn and practice new ideas and
              technologies. Hit me up if you'd like to chat, I'll try my best to
              respond :)
            </p>
            <p>
              Currently I am learning gatsbyjs (by updating this site!) and I am
              working on a personal project involving twitch chatbots, shopify
              api, react, firebase, nodejs and express. Check out my projects
              page for more info on this and the rest of my projects!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
