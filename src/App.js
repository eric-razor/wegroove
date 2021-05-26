import React from 'react'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {onPageLoad} from './components/Login'

const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI, REACT_APP_SCOPES} = process.env

export default function App() {
  return (
    <Router>
      <div onLoad={onPageLoad()}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}