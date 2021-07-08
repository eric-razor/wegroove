import React from 'react'
import Home from './components/Home'
import { UserProfile } from './features/user/UserProfile';
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
            <Home />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}