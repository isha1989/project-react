import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Nav from 'react-bootstrap/Nav';
import CarouselComponent from "./components/carousel.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




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
    <Col sm={4}><Nav defaultActiveKey="/home"  className="flex-column">
   
  <Nav.Link href="#About">About JHSS</Nav.Link>
  <Nav.Link href="#FineOption">About Fine option program</Nav.Link>
  <Nav.Link href="#Hour">Hours calculator</Nav.Link> 
  <Nav.Link href="#Elg">Eligibility</Nav.Link>
  <Nav.Link href="#Registeration">Registeration form</Nav.Link>
  <Nav.Link href="#Workplacement">Choice of work placement</Nav.Link>
  
</Nav></Col>
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

export default FineOption; 
