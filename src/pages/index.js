// Step 1: Import your component
import * as React from "react";
// import { Link } from 'gatsby'
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () =>
{
  return (
    <Layout pageTitle="About" style={{ maxWidth: '60vw', padding: '25px' }}>
      <h5>I am a full stack web developer and
        experienced technical support engineer for Adobe.</h5>

      <p>
        I am constantly looking to learn and practice new ideas and
        technologies. Hit me up if you'd like to chat, I'll try my best to
        respond :)
      </p>
      <p>
        Currently I am learning gatsbyjs (by updating this site!) and I am
        working on a personal project involving twitch chatbots, shopify api,
        react, firebase, nodejs and express. Check out my projects page for more
        info on this and the rest of my projects!
      </p>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;


// import { Link } from 'gatsby'
// import * as React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'

// const IndexPage = () => {
//   return (

//     <Container fluid style={{justifyContent:'center', alignItems:'center',minHeight:'100vh'}}>
//       <Row style={{padding:'30vh 30vw'}}>
//         <Col>
//         <center>
//       <Link to="/about" >enter.</Link>

//         </center>

//         </Col>
//       </Row>

//       </Container>
//   )
// }

// export default IndexPage