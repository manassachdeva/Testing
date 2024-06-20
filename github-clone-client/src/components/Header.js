// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #24292e;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <header>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/recent-activity">Recent Activity</NavLink>
        <NavLink to="/starred">Starred</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </Navbar>
    </header>
  );
};

export default Header;
