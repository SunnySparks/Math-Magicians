import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function Navbar() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path="/Calculator" />
        <Route path="/Quote" />
      </Switch>
    </Router>
  );
}
