/*import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'
import CarouselComponent from "./components/carousel.component";
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';*/



import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import NotFound from "./components/notFound";
import Eligibility from "./eligibility";
import FineOption from "./fineoption";
import Hour from "./hour";
import Registeration from "./registeration";
import Workplacement from "./workplacement";

function App() {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route  path={"/"} component={About} />
          <Route path={"/404"} component={NotFound} />
        

        </Switch>
      </HashRouter>
    </Container>

  );

}
export default App;
