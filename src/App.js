import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import './App.css';
import Home from './Home';
import About from './About';
import Users from './Users';
import Navigation from './Navigation';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/about">
            <About />
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
