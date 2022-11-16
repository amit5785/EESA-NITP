import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import './App.css';
import Team from './Pages/Team';

class App extends Component {
  render() {
  return (
    <div>
      <Switch>
        <Route path='/team' component={Team} />
        <Route path='/' exact component={HomePage} />
      </Switch>
    </div>
  );
}
}

export default App;
