import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserLogo } from './male_user_icon.svg';

const Header = () => (
  <div className="header">
    <h1 className="main-title">Bookstore CMS</h1>
    <nav>
      <ul className="header-links">
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
    <span className="user-logo"><UserLogo /></span>
  </div>
);

export default Header;
