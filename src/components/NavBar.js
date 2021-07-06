import React from 'react'
import {
    NavLink,
} from "react-router-dom";
import { onPageLoad } from './Login';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav>
                <ul className="Nav-Route-List">
                    <li>
                        <NavLink to="/profile"> Profile</NavLink>
                    </li>
                    <li onLoad={onPageLoad()}>
                        <NavLink to="/"> Login </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
