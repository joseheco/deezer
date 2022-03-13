import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink className="profile" to="/Home">
      <p>Home</p>
    </NavLink>
    <NavLink className="profile" to="/Profile">
      <p>Profile</p>
    </NavLink>
    <NavLink className="search" to="/Search">
      <p>Search</p>
    </NavLink>
  </nav>
);

export default NavBar;
