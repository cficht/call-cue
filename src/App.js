import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Dashboard from './Dashboard/Dashboard';
import Request from './Request/Request';
import { Detail } from './Detail/Detail';
import All from './All/All';

function App() {
  return (
    <div className="App">
      <Router>
        <h1><Link to="/">Cued</Link></h1>
        <Switch>
          <Route path="/request" component={Request} />
          <Route path="/cue" component={All} />
          <Route path="/detail/:id/" component={Detail} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
