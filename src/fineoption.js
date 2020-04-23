import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Nav from 'react-bootstrap/Nav';
import CarouselComponent from "./components/carousel.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: black; }
  a, .navbar-nav, .navbar-light .nav-link {
    
    color: black;
    &:hover { color: gray; }
  }
  
 
`;



const FineOption = () =>
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
    <Col sm={4}>
      <Styles>
    <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/About" >About JHSS</Nav.Link>
                <Nav.Link href="/fineoption">About Fine option program</Nav.Link>
                <Nav.Link href="/Hour">Hours calculator</Nav.Link>
                <Nav.Link href="/Eligibility">Eligibility</Nav.Link>
                <Nav.Link href="/Registeration">Registeration form</Nav.Link>
                <Nav.Link href="/Workplacement">Choice of work placement</Nav.Link>

            </Nav></Styles></Col>
    <Col sm={8}>
    <h1>About Fine option program</h1>
        <p>
            The Fine Option Program is not an alternative to sentencing, but gives people the opportunity to settle fines by doing unpaid, supervised community service work rather than paying in cash. The Ministry of Justice works with town councils, First Nations communities, local non-profit organizations or an individual to administer the Fine Option Program in the community under a contractual agreement. These organizations or individuals, called fine option agencies, assign suitable community service work to people who register to settle fines under the program. The agencies also advise the court of the outcome of the assignment.
        </p><br /><p>
Currently, Saskatchewan has agreements with Alberta and Manitoba that allow some out-of-province fines to be worked off in another province. The program is open only to the individual who received the fine, and does not apply to companies or corporations.
        </p>
        <br/>
        <p>
            Performance of community service work in the Fine Option Program is considered comparable to paid employment with regard to quality, punctuality and notification of the work placement agency regarding absenteeism or sickness.
        </p>
    </Col>
  </Row>
 
</Container>
  <hr />
<Container>
<Row>
            <Col xs={3}>
              <h2>Contact us:</h2>
              Address: 1801 Toronto street, Regina, Sk.
              <hr />
              Click on map for directions
        </Col>
            <Col xs={9}>
              <div class="fluid-wrapper">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.510025714919!2d-104.60091068426865!3d50.450226579475405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e4a2c7664bd%3A0x63542e47c549a32!2s1801%20Toronto%20St%2C%20Regina%2C%20SK%20S4P%201M7!5e0!3m2!1sen!2sca!4v1587519159370!5m2!1sen!2sca" width="830" height="200"></iframe>
              </div>
            </Col>
          </Row>
</Container>
    
  </Router>
</React.Fragment>
    );
}

export default FineOption; 
