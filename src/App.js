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

function App() {
  return (
    <div className="App">
      <Router>
        <h1><Link to="/">CUED</Link></h1>
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <Route path="/request" component={Request} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
