import React from 'react'; 
import { NavLink } from 'react-router-dom';


export default function Nav(props) {
    return(
        <ul className="nav">
            <li>
                <NavLink exact activeClassName="active-nav" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active-nav" to="/battle">Battle</NavLink>                
            </li>
            <li>
                <NavLink activeClassName="active-nav" to="/popular">Popular</NavLink>
            </li>
        </ul>
    );
}

