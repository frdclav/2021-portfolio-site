import { Link } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const IndexPage = () => {
  return (

    <Container fluid style={{justifyContent:'center', alignItems:'center',minHeight:'100vh'}}>
      <Row style={{padding:'30vh 30vw'}}>
        <Col>
        <center>
      <Link to="/about" >enter.</Link>

        </center>
        
        </Col>
      </Row>
      
      </Container>
  )
}

export default IndexPage