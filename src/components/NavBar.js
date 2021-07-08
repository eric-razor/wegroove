import React from 'react'
import {
    NavLink,
} from "react-router-dom";
import { onPageLoad, redirect } from './Login';


import '../styles/NavBar.css'
import { fetchUser } from '../features/user/userSlice';

const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="nav-links">
                <ul className="nav-route-list">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li onClick={fetchUser()}>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li id="login-btn" onLoad={onPageLoad()} onClick={redirect}>
                        <NavLink to="/">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
