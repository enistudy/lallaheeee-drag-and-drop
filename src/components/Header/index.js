import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

import './style.scss';

const Header = () => (
  <header>
    <img className="logo" src={logo} alt={logo} />
    <nav>
      <ul>
        <li>
          <Link to="/">Drag & Drop</Link>
        </li>
        <li>
          <Link to="/usedraggable">UseDraggable</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
