import React from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Nav from 'react-bootstrap/Nav'
import CarouselComponent from "./components/carousel.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const Eligibility = () =>
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
  <Nav.Link href="/Eligibility">Eligibility</Nav.Link>
  <Nav.Link href="/Registeration">Registeration form</Nav.Link>
  <Nav.Link href="Workplacement">Choice of work placement</Nav.Link>
  
</Nav></Col>
    <Col sm={8}>
    <h1>Eligibilty for Fine option program</h1>
    <p>
            <ul>
           <li> In order to be eligible for the fine option program, you must obtain an order from court to register for the program. </li>
           <li>
               Age should be > 18 years.
           </li>
           <li>
               Criminal record check required by some of the work placement organisations.
           </li>
           <li>
               Ticket holder should must have a valid photo ID.
           </li>
           <li>
               Only the ticket holder can work off the fine, no one else on the behalf of ticket holder can work off the fine.

           </li>
           <li>
               Ticket holder is responsible to sign off the work record sheet as an attendance. This sheet is preovided to all the work placement organisations.
           </li>
           <li>
            If you are currently receiving Employment Insurance benefits, you may be eligible to participate in the program as long as participation does not affect your ability to meet Employment Insurance requirements in terms of seeking employment/being employed.
           </li>
          
        </ul>
        </p>
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



export default Eligibility; 