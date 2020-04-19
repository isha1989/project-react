import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
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
              <Nav  defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/About" >About JHSS</Nav.Link>
                <Nav.Link href="/FineOption">About Fine option program</Nav.Link>
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
              Follow us on FaceBook
        </Col>
            <Col xs={9}>

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