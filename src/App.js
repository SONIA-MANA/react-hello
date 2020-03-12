/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import Home from './components/Home';
import Staff from './components/Staff';
import Table from './components/Table';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1><u>WELCOME</u></h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/staff">Staff</NavLink></li>
            <li><NavLink to="/Table">Table</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/staff" component={Staff} />
            <Route path="/Table" component={Table} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
