var React = require('react');
var NavLink = require('react-router-dom').NavLink;


function Nav(props) {
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

module.exports = Nav; 