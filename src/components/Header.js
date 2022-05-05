import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserLogo } from './male_user_icon.svg';

const Header = () => (
  <div className="header d-flex">
    <h1 className="main-title d-flex">Bookstore CMS</h1>
    <nav>
      <ul className="header-links d-flex black-2">
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
    <span className="user-logo grey-border"><UserLogo /></span>
  </div>
);

export default Header;
