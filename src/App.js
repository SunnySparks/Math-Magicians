import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
