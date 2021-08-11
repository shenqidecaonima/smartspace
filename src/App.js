import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeCN from "./HomeCN";
import HomeEN from "./HomeEN";
import Error from "./Error";
import "./App.css";
import BestMenu from './BestMenu';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeCN}/>
      <Route exact path="/EN" component={HomeEN}/>
      <Route exact path="/BestMenu" component={BestMenu}/>
      <Route component={Error}/>
    </Switch>

  );
}

export default App;
