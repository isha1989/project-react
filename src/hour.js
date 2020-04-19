import React from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'
import CarouselComponent from "./components/carousel.component";

const Hour = () =>
{
    return(
        <React.Fragment>
  <Router>
    <NavigationBar />
    <hr  />
    <CarouselComponent />
    <hr />
    <Container>
  <Row>
    <Col sm={4}><Nav defaultActiveKey="/home"  className="flex-column">
  <Nav.Link href="/About">About JHSS</Nav.Link>
  <Nav.Link href="/FineOption">About Fine option program</Nav.Link>
  <Nav.Link href="/Hour">Hours calculator</Nav.Link> 
  <Nav.Link href="/Eligibilty">Eligibility</Nav.Link>
  <Nav.Link href="/Registeration">Registeration form</Nav.Link>
  <Nav.Link href="Workplacement">Choice of work placement</Nav.Link>
  
</Nav></Col>
    <Col sm={8}>
        <h1> Hours </h1>
    
    </Col>
  </Row>
 
</Container>
  <hr />
<Container>
    <Row>
        <Col xs= {3}>
            Follow us on FaceBook
        </Col>
        <Col xs={9}>
     


        </Col>
    </Row>
</Container>
    
  </Router>
</React.Fragment>
    );
}

export default Hour;
