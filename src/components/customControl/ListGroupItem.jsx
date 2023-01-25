import React from 'react';

import './listGroupItem.scss';

const ListGroupItem = (props) => {
  return (
    <li className="list-group-item" {...props}>
      {props.children}
    </li>
  );
};

export default ListGroupItem;
