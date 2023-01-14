import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">LOGO</div>
      <div className="rigth">
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/collapse">Collapse</Link>
          </li>
          <li>
            <Link to="/loader">Loader</Link>
          </li>
          <li>
            <Link to="/wrap">Wrap</Link>
          </li>
          <li>
            <Link to="/ellipsis">Ellipsis</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
