import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Placements from './Pages/Placements';
import './App.css';

class App extends Component {
  render() {
  return (
    <div>
      <Switch>
        <Route path='/placements' component={Placements} />
        <Route path='/' exact component={HomePage} />
      </Switch>
    </div>
  );
}
}

export default App;
