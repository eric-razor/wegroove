import React from 'react'
import {
    NavLink,
} from "react-router-dom";
import '../styles/NavBar.css'
import { useSelector } from 'react-redux';
import {  loggedIn } from '../features/user/userSlice';
import Logout from './Logout';
import Login from './Login';

const NavBar = () => {
    const user = useSelector(loggedIn)
    return (
        <div className="navbar">
            <nav className="nav-links">
                <ul className="nav-route-list">
                    <li>
                        <NavLink className="nav-route-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-route-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="auth-btn">
                        {user ? <Logout /> : <Login />}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
