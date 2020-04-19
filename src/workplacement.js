import React from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import CarouselComponent from "./components/carousel.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
    <Col sm={4}><Nav defaultActiveKey="/home"  className="flex-column">
  <Nav.Link href="/About">About JHSS</Nav.Link>
  <Nav.Link href="/FineOption">About Fine option program</Nav.Link>
  <Nav.Link href="/Hour">Hours calculator</Nav.Link> 
  <Nav.Link href="/Eligibility">Eligibility</Nav.Link>
  <Nav.Link href="/Registeration">Registeration form</Nav.Link>
  <Nav.Link href="Workplacement">Choice of work placement</Nav.Link>
  
</Nav></Col>
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



export default Workplacement;
