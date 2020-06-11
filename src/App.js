import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route component={Error}/>
    </Switch>

  );
}

export default App;
