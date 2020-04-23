import React from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import CarouselComponent from "./components/carousel.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: black; }
  a, .navbar-nav, .navbar-light .nav-link {
    
    color: black;
    &:hover { color: gray; }
  }
  
 
`;
const Workplacement = () =>
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
    <Col sm={4}><Styles><Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/About" >About JHSS</Nav.Link>
                <Nav.Link href="/fineoption">About Fine option program</Nav.Link>
                <Nav.Link href="/Hour">Hours calculator</Nav.Link>
                <Nav.Link href="/Eligibility">Eligibility</Nav.Link>
                <Nav.Link href="/Registeration">Registeration form</Nav.Link>
                <Nav.Link href="/Workplacement">Choice of work placement</Nav.Link>

              </Nav></Styles></Col>
    <Col sm={8}>
    <h3> Work placement on Weekdays</h3>
<ul>
    <li>
        Church
    </li>
    <li>
        Temple
    </li>
    <li>
        Mosque
    </li>
    <li>
        Gurudwara
    </li>
    <li>
        People for Animal
    </li>
    <li>
        Gurudwara
    </li>
    <li>
        People for Animal
    </li>
    <li>
        North central family center
    </li>
    <li>
        Praire spirit connection
    </li>
    <li>
        Salvation army thrift store
    </li>
    <li>
        North central family center
    </li>
    <li>
        Praire spirit connection
    </li>
    <li>
        Salvation army thrift store
    </li>

</ul>  
            <hr />
                <h3> Work placement on Weekends</h3>  
                <ul>
                    <li>
                        Church
                    </li>
                    <li>
                        Temple
                    </li>
                    <li>
                        Mosque
                    </li>
                    <li>
                        Gurudwara
                    </li>
                    <li>
                        People for Animal
                    </li>
                    <li>
                        North central family center
                    </li>
                    <li>
                        Praire spirit connection
                    </li>
                    <li>
                        Salvation army thrift store
                    </li>
                    <li>
                        Gurudwara
                    </li>
                    <li>
                        People for Animal
                    </li>
                    <li>
                        North central family center
                    </li>
                    <li>
                        Praire spirit connection
                    </li>
                    <li>
                        Salvation army thrift store
                    </li>

                </ul>       
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



export default Workplacement;
