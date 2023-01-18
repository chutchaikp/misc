import React from 'react';
import { Link } from 'react-router-dom';

import './transition.scss';

const Transition = () => {
  return (
    <div className="transition">
      <div className="before">
        <ul>
          <li>
            <Link>Icon</Link>
          </li>
          <li>
            <Link>Collapse</Link>
          </li>
          <li>
            <Link>Loader</Link>
          </li>
          <li>
            <Link>Wrap</Link>
          </li>
          <li>
            <Link>Ellipsis</Link>
          </li>
          <li>
            <Link>Button Group</Link>
          </li>
          <li>
            <Link>Form</Link>
          </li>
          <li>
            <Link>Radio</Link>
          </li>
          <li>
            <Link>Transition</Link>
          </li>
        </ul>
      </div>

      <div className="after">
        <ul>
          <li>
            <Link>Icon</Link>
          </li>
          <li>
            <Link>Collapse</Link>
          </li>
          <li>
            <Link>Loader</Link>
          </li>
          <li>
            <Link>Wrap</Link>
          </li>
          <li>
            <Link>Ellipsis</Link>
          </li>
          <li>
            <Link>Button Group</Link>
          </li>
          <li>
            <Link>Form</Link>
          </li>
          <li>
            <Link>Radio</Link>
          </li>
          <li>
            <Link>Transition</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Transition;
