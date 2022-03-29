import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import './App.css';
import Home from './Home';
import Characters from './Characters';
import Users from './Users';
import Navigation from './Navigation';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
