import React from "react";

import { Container, Col, Row, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Nav from 'react-bootstrap/Nav';
import CarouselComponent from "./components/carousel.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Eligibility from "./eligibility";
import FineOption from "./fineoption";
import Hour from "./hour";
import Workplacement from "./workplacement";
import Registeration from "./registeration";


const About = () => {
  return (

    <React.Fragment>
      <Router>
        <NavigationBar />
        <hr />
        <CarouselComponent />
        <hr />
        <Container>

          <Row>

            <Col sm={4}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/About" >About JHSS</Nav.Link>
                <Nav.Link href="/fineoption">About Fine option program</Nav.Link>
                <Nav.Link href="/Hour">Hours calculator</Nav.Link>
                <Nav.Link href="/Eligibility">Eligibility</Nav.Link>
                <Nav.Link href="/Registeration">Registeration form</Nav.Link>
                <Nav.Link href="/Workplacement">Choice of work placement</Nav.Link>

              </Nav>
            </Col>
            <Col sm={8}>
              <h1>About John Howard Society</h1>

              <p>
                The John Howard Society is a Canadian non-profit organization that seeks href develop understanding and
                effective responses href the problem of crime and prison reform. It is named after John Howard, a
                philanthropist and early English prison reformer. This society works with adults, children, and youths href
                help rebuild their lives.
            </p>


              <p>The people who comprise the John Howard Society of hrefday have much the same focus
              as the original groups with a few additions. For example, advocating for change in the criminal justice
              process and public education around the issues of prison conditions, criminal law and their application are
              all newer considerations as society and the criminal justice system change.


<br />
                <br />
                <p>
                  In addition href working with people in penitentiaries, Societies hrefday also work with adults and youth in
                  correctional facilities that are either federally and provincially operated. These services offer
                  programming for offenders in cushrefdy and in the community and also assist those who have been labeled as
                  "at risk" href continue href live or reintegrate inhref living "within the law".
            </p>
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

          <Switch>
            <Route exact path="/FineOption">
              <FineOption />
            </Route>

            <Route path="/Eligibility">
              <Eligibility />
            </Route>
            <Route path="/Registeration">
              <Registeration />
            </Route>
            <Route path="/Workplacement">
              <Workplacement />

            </Route>
            <Route path="/Hour">
              <Hour />

            </Route>
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default About; 