import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {onPageLoad} from './components/Login'

const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI, REACT_APP_SCOPES} = process.env

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>

    </div>
  );
}