import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">Ⓜ️isc</Link>
      </div>
      <div className="right">
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
          <li>
            <Link to="/buttongroup">Button Group</Link>
          </li>

          <li>
            <Link to="/radio">Radio</Link>
          </li>
          <li>
            <Link to="/transition">Transition</Link>
          </li>
          <li>
            <Link to="/custom">Controls</Link>
          </li>
          <li>
            <Link to="/listgroup">ListGroup</Link>
          </li>
          <li>
            <Link to="/showhide">Show/Hide</Link>
          </li>
          <li>
            <Link to="/datagrid">DataGrid</Link>
          </li>
          <li>
            <Link to="/img">ImgUpload</Link>
          </li>
          <li>
            <Link to="/dotenv">.env</Link>
          </li>
          <li>
            <Link to="/loading">.loading</Link>
          </li>
          <li>
            <Link to="/hook">Custom Hook</Link>
          </li>

          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
