import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return(
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active" className="nav-el">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active" className="nav-el">
            New Poll
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active" className="nav-el">
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}