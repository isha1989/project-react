



import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import NotFound from "./components/notFound";


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
