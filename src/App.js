



import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import NotFound from "./components/notFound";
import Registeration from "./registeration";
import Hour from "./hour";
import Workplacement from "./workplacement";
import FineOption from "./fineoption";
import Eligibility from "./eligibility";


function App() {
  return (
    <Container>
      
      <HashRouter>
        <Switch>
          <Route exact path={"/"} component={About} />
          <Route path={"/404"} component={NotFound} />
         
        
        </Switch>
      </HashRouter>
    </Container>

  );

}
export default App;
